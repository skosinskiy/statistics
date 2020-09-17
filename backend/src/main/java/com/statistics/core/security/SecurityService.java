package com.statistics.core.security;

import com.statistics.core.entity.user.Permission;
import com.statistics.core.entity.user.User;
import com.statistics.core.error.exception.ActionForbiddenException;
import com.statistics.core.rest.dto.request.auth.LoginRequest;
import com.statistics.core.rest.dto.request.auth.RefreshRequest;
import com.statistics.core.rest.dto.response.auth.LoginResponse;
import com.statistics.core.service.user.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class SecurityService {

  public static final String AUTHORIZATION_HEADER = "Authorization";
  public static final String TOKEN_TYPE = "Bearer ";
  public static final String EMAIL_CLAIM = "email";
  public static final String PERMISSIONS_CLAIM = "permissions";
  public static final String IS_ACCOUNT_NON_EXPIRED_CLAIM = "isAccountNonExpired";
  private AuthenticationManager authenticationManager;
  private UserService userService;
  private JwtParser jwtParser;

  @Value("${jwt.secret}")
  private String jwtSecret;

  @Value("${jwt.access-token-exp-ms}")
  private Long jwtAccessTokenExpirationInMs;

  @Value("${jwt.refresh-token-exp-ms}")
  private Long jwtRefreshTokenExpirationInMs;

  @Autowired
  public SecurityService(
      @Lazy AuthenticationManager authenticationManager,
      UserService userService,
      JwtParser jwtParser) {
    this.authenticationManager = authenticationManager;
    this.userService = userService;
    this.jwtParser = jwtParser;
  }

  String getJwtSecret() {
    return jwtSecret;
  }

  public LoginResponse setAuthenticationAndGenerateJwt(LoginRequest loginRequest) {
    Authentication authentication = authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
    SecurityContextHolder.getContext().setAuthentication(authentication);
    User user = (User) authentication.getPrincipal();
    User userWithRefreshToken = userService.setRefreshToken(user, jwtRefreshTokenExpirationInMs);
    return getLoginResponse(userWithRefreshToken);
  }

  private Authentication authenticateUser(String username, String password) {
    return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
  }

  private LoginResponse getLoginResponse(
      User userWithRefreshToken) {
    LoginResponse loginResponse = new LoginResponse();
    loginResponse.setJwtAccessToken(generateAccessToken(userWithRefreshToken));
    loginResponse.setJwtRefreshToken(userWithRefreshToken.getJwtRefreshToken());
    loginResponse.setJwtRefreshTokenExpireDate(userWithRefreshToken.getJwtRefreshTokenExpireDate().getTime());
    loginResponse.setTokenType(TOKEN_TYPE);
    return loginResponse;
  }

  private String generateAccessToken(User user) {
    Date now = new Date();
    Date expiryDate = new Date(now.getTime() + jwtAccessTokenExpirationInMs);

    return Jwts.builder()
        .setSubject(Long.toString(user.getId()))
        .claim(EMAIL_CLAIM, user.getEmail())
        .claim(PERMISSIONS_CLAIM, user.getPermissions())
        .claim(IS_ACCOUNT_NON_EXPIRED_CLAIM, user.isAccountNonExpired())
        .setIssuedAt(now)
        .setExpiration(expiryDate)
        .signWith(SignatureAlgorithm.HS512, jwtSecret)
        .compact();
  }

  private Claims getJwtClaims(String jwt) {
    return jwtParser.setSigningKey(jwtSecret).parseClaimsJws(jwt).getBody();
  }

  public void setAuthenticationFromJwt(String jwt, HttpServletRequest request) {
    Claims claims = getJwtClaims(jwt);
    UserDetails userDetails = org.springframework.security.core.userdetails.User.builder()
        .username(String.valueOf(claims.get(EMAIL_CLAIM)))
        .password("")
        .authorities(getUserPermissionsFromClaim(claims))
        .accountExpired(!Boolean.parseBoolean(claims.get(IS_ACCOUNT_NON_EXPIRED_CLAIM).toString()))
        .build();
    UsernamePasswordAuthenticationToken authentication =
        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
    SecurityContextHolder.getContext().setAuthentication(authentication);
  }

  @SuppressWarnings("ALL")
  private List<Permission> getUserPermissionsFromClaim(Claims claims) {
    return ((List<String>) claims.get(PERMISSIONS_CLAIM))
        .stream()
        .map(Permission::valueOf)
        .collect(Collectors.toList());
  }

  public LoginResponse refreshToken(RefreshRequest refreshRequest) {
    User user = userService.findByRefreshToken(refreshRequest.getJwtRefreshToken());
    checkIsUserExpired(user);
    checkIsJwtRefreshTokenExpired(user);
    User userWithRefreshToken = userService.setRefreshToken(user, jwtRefreshTokenExpirationInMs);
    return getLoginResponse(userWithRefreshToken);
  }

  private void checkIsUserExpired(User user) {
    if (!user.isAccountNonExpired()) {
      throw new AccountExpiredException("User account is expired");
    }
  }

  private void checkIsJwtRefreshTokenExpired(User user) {
    if (user.getJwtRefreshTokenExpireDate().getTime() < System.currentTimeMillis()) {
      throw new ActionForbiddenException(String.format("Refresh token %s is expired", user.getJwtRefreshToken()));
    }
  }
}