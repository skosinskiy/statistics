package com.statistics.core.security;

import com.statistics.core.entity.user.Permission;
import com.statistics.core.entity.user.User;
import com.statistics.core.error.exception.ActionForbiddenException;
import com.statistics.core.rest.dto.request.auth.LoginRequest;
import com.statistics.core.rest.dto.request.auth.RefreshRequest;
import com.statistics.core.rest.dto.response.auth.LoginResponse;
import com.statistics.core.service.user.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
@RunWith(SpringRunner.class)
@Transactional
public class SecurityServiceTest {

  @Rule
  public ExpectedException expectedException = ExpectedException.none();

  @Autowired
  private SecurityService securityService;

  @MockBean
  private AuthenticationManager authenticationManager;

  @MockBean
  private UserService userService;

  @MockBean
  private JwtParser jwtParser;

  @Value("${jwt.access-token-exp-ms}")
  private long jwtAccessTokenExpirationInMs;

  @Value("${jwt.refresh-token-exp-ms}")
  private Long jwtRefreshTokenExpirationInMs;

  @Test
  public void setAuthenticationAndGenerateJwtTest() {
    String email = "email";
    String password = "password";
    LoginRequest loginRequest = new LoginRequest();
    loginRequest.setEmail(email);
    loginRequest.setPassword(password);
    Long userId = 1L;
    User user = new User();
    user.setId(userId);
    user.setEmail(email);

    String jwtRefreshToken = "jwtRefreshToken";
    List<Permission> permissions = new ArrayList<>();
    permissions.add(Permission.VIEW);
    User userWithRefreshToken = new User();
    userWithRefreshToken.setId(userId);
    userWithRefreshToken.setEmail(email);
    userWithRefreshToken.setJwtRefreshToken(jwtRefreshToken);
    userWithRefreshToken.setJwtRefreshTokenExpireDate(new Date(jwtRefreshTokenExpirationInMs));
    userWithRefreshToken.setAccountExpireDate(new Date(System.currentTimeMillis() + 1000000));
    userWithRefreshToken.setPermissions(permissions);

    Authentication authentication = mock(Authentication.class);

    when(authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password)))
        .thenReturn(authentication);
    when(authentication.getPrincipal()).thenReturn(user);
    when(userService.setRefreshToken(user, jwtRefreshTokenExpirationInMs)).thenReturn(userWithRefreshToken);

    LoginResponse loginResponse = securityService.setAuthenticationAndGenerateJwt(loginRequest);

    Claims claims = Jwts
        .parser()
        .setSigningKey(securityService.getJwtSecret())
        .parseClaimsJws(loginResponse.getJwtAccessToken())
        .getBody();
    assertEquals(authentication, SecurityContextHolder.getContext().getAuthentication());
    assertEquals(jwtRefreshToken, loginResponse.getJwtRefreshToken());
    assertEquals(jwtRefreshTokenExpirationInMs, loginResponse.getJwtRefreshTokenExpireDate());
    assertEquals(SecurityService.TOKEN_TYPE, loginResponse.getTokenType());
    assertEquals(String.valueOf(userId), claims.getSubject());
    assertEquals(email, claims.get(SecurityService.EMAIL_CLAIM));
    assertTrue(Boolean.parseBoolean(claims.get(SecurityService.IS_ACCOUNT_NON_EXPIRED_CLAIM).toString()));
    assertEquals(permissions, ((List<String>) claims.get(SecurityService.PERMISSIONS_CLAIM))
        .stream()
        .map(Permission::valueOf)
        .collect(Collectors.toList()));
    assertEquals(jwtAccessTokenExpirationInMs,claims.getExpiration().getTime() - claims.getIssuedAt().getTime());
  }

  @Test
  public void setAuthenticationFromJwtTest() {
    String jwt = "jwt";
    String email = "email";
    boolean isAccountNotExpired = true;
    List<String> permissions = new ArrayList<>();
    permissions.add(Permission.VIEW.toString());
    HttpServletRequest httpServletRequest = mock(HttpServletRequest.class);
    Jws<Claims> claimsJws = mock(Jws.class);
    Claims claims = mock(Claims.class);

    when(jwtParser.setSigningKey(anyString())).thenReturn(jwtParser);
    when(jwtParser.parseClaimsJws(jwt)).thenReturn(claimsJws);
    when(claimsJws.getBody()).thenReturn(claims);
    when(claims.get(SecurityService.EMAIL_CLAIM)).thenReturn(email);
    when(claims.get(SecurityService.IS_ACCOUNT_NON_EXPIRED_CLAIM)).thenReturn(isAccountNotExpired);
    when(claims.get(SecurityService.PERMISSIONS_CLAIM)).thenReturn(permissions);

    securityService.setAuthenticationFromJwt(jwt, httpServletRequest);

    UserDetails user =
        (org.springframework.security.core.userdetails.User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

    assertEquals(email, user.getUsername());
    assertEquals(isAccountNotExpired, user.isAccountNonExpired());
    assertEquals(permissions.stream().map(Permission::valueOf).collect(Collectors.toSet()), user.getAuthorities());
  }

  @Test
  public void setAuthenticationFromJwtAccountExpiredTest() {
    String jwt = "jwt";
    String email = "email";
    boolean isAccountNotExpired = false;
    List<String> permissions = new ArrayList<>();
    permissions.add(Permission.VIEW.toString());
    HttpServletRequest httpServletRequest = mock(HttpServletRequest.class);
    Jws<Claims> claimsJws = mock(Jws.class);
    Claims claims = mock(Claims.class);

    when(jwtParser.setSigningKey(anyString())).thenReturn(jwtParser);
    when(jwtParser.parseClaimsJws(jwt)).thenReturn(claimsJws);
    when(claimsJws.getBody()).thenReturn(claims);
    when(claims.get(SecurityService.EMAIL_CLAIM)).thenReturn(email);
    when(claims.get(SecurityService.IS_ACCOUNT_NON_EXPIRED_CLAIM)).thenReturn(isAccountNotExpired);
    when(claims.get(SecurityService.PERMISSIONS_CLAIM)).thenReturn(permissions);

    securityService.setAuthenticationFromJwt(jwt, httpServletRequest);

    UserDetails user =
        (org.springframework.security.core.userdetails.User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

    assertEquals(email, user.getUsername());
    assertEquals(isAccountNotExpired, user.isAccountNonExpired());
    assertEquals(permissions.stream().map(Permission::valueOf).collect(Collectors.toSet()), user.getAuthorities());
  }

  @Test
  public void refreshTokenTest() {
    String jwtRefreshToken = "jwtRefreshToken";
    RefreshRequest refreshRequest = new RefreshRequest();
    refreshRequest.setJwtRefreshToken(jwtRefreshToken);

    User user = new User();
    user.setAccountExpireDate(new Date(System.currentTimeMillis() + 1000000));
    user.setJwtRefreshTokenExpireDate(new Date(System.currentTimeMillis() + 1000000));

    Long userId = 1L;
    String email = "email";
    List<Permission> permissions = new ArrayList<>();
    permissions.add(Permission.VIEW);
    User userWithRefreshToken = new User();
    userWithRefreshToken.setId(userId);
    userWithRefreshToken.setEmail(email);
    userWithRefreshToken.setJwtRefreshToken(jwtRefreshToken);
    userWithRefreshToken.setJwtRefreshTokenExpireDate(new Date(jwtRefreshTokenExpirationInMs));
    userWithRefreshToken.setAccountExpireDate(new Date(System.currentTimeMillis() + 1000000));
    userWithRefreshToken.setPermissions(permissions);

    when(userService.findByRefreshToken(jwtRefreshToken)).thenReturn(user);
    when(userService.setRefreshToken(user, jwtRefreshTokenExpirationInMs)).thenReturn(userWithRefreshToken);

    LoginResponse loginResponse = securityService.refreshToken(refreshRequest);

    Claims claims = Jwts
        .parser()
        .setSigningKey(securityService.getJwtSecret())
        .parseClaimsJws(loginResponse.getJwtAccessToken())
        .getBody();
    assertEquals(jwtRefreshToken, loginResponse.getJwtRefreshToken());
    assertEquals(jwtRefreshTokenExpirationInMs, loginResponse.getJwtRefreshTokenExpireDate());
    assertEquals(SecurityService.TOKEN_TYPE, loginResponse.getTokenType());
    assertEquals(String.valueOf(userId), claims.getSubject());
    assertEquals(email, claims.get(SecurityService.EMAIL_CLAIM));
    assertTrue(Boolean.parseBoolean(claims.get(SecurityService.IS_ACCOUNT_NON_EXPIRED_CLAIM).toString()));
    assertEquals(permissions, ((List<String>) claims.get(SecurityService.PERMISSIONS_CLAIM))
        .stream()
        .map(Permission::valueOf)
        .collect(Collectors.toList()));
    assertEquals(jwtAccessTokenExpirationInMs,claims.getExpiration().getTime() - claims.getIssuedAt().getTime());
  }

  @Test
  public void refreshTokenExpiredAccountExceptionTest() {
    String jwtRefreshToken = "jwtRefreshToken";
    RefreshRequest refreshRequest = new RefreshRequest();
    refreshRequest.setJwtRefreshToken(jwtRefreshToken);

    User user = new User();
    user.setAccountExpireDate(new Date(System.currentTimeMillis()));
    user.setJwtRefreshTokenExpireDate(new Date(System.currentTimeMillis() + 1000000));

    when(userService.findByRefreshToken(jwtRefreshToken)).thenReturn(user);

    expectedException.expect(AccountExpiredException.class);
    expectedException.expectMessage("User account is expired");

    securityService.refreshToken(refreshRequest);
  }

  @Test
  public void refreshTokenExpiredExceptionTest() {
    String jwtRefreshToken = "jwtRefreshToken";
    RefreshRequest refreshRequest = new RefreshRequest();
    refreshRequest.setJwtRefreshToken(jwtRefreshToken);

    User user = new User();
    user.setId(100L);
    user.setAccountExpireDate(new Date(System.currentTimeMillis() + System.currentTimeMillis()));
    user.setJwtRefreshTokenExpireDate(new Date(System.currentTimeMillis()));
    user.setJwtRefreshToken(jwtRefreshToken);

    when(userService.findByRefreshToken(jwtRefreshToken)).thenReturn(user);

    expectedException.expect(ActionForbiddenException.class);
    expectedException.expectMessage(String.format("Refresh token %s is expired", jwtRefreshToken));

    securityService.refreshToken(refreshRequest);
  }
}