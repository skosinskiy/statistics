package com.statistics.core.rest.controller.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.statistics.core.rest.dto.request.auth.LoginRequest;
import com.statistics.core.rest.dto.response.auth.LoginResponse;
import com.statistics.core.service.user.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@SpringBootTest
@RunWith(SpringRunner.class)
@Transactional
@AutoConfigureMockMvc
public class AuthControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @Autowired
  private ObjectMapper objectMapper;

  @Autowired
  private UserService userService;

  @Value("${jwt.refresh-token-exp-ms}")
  private Long jwtRefreshTokenExpirationInMs;

  @Test
  public void generateJwt() throws Exception {
    String expectedEmail = "user1@gmail.com";
    String expectedTokenType = "Bearer ";
    LoginRequest loginRequest = new LoginRequest();
    loginRequest.setEmail(expectedEmail);
    loginRequest.setPassword("admin");
    long beforeRequestTime = System.currentTimeMillis();
    MockHttpServletResponse response = mockMvc.perform(post("/api/auth")
        .content(objectMapper.writeValueAsBytes(loginRequest))
        .contentType(MediaType.APPLICATION_JSON)
    ).andReturn().getResponse();

    LoginResponse loginResponse = objectMapper.readValue(response.getContentAsString(), LoginResponse.class);

    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertNotNull(loginResponse.getJwtAccessToken());
    assertEquals(expectedTokenType, loginResponse.getTokenType());
    assertNotNull(loginResponse.getJwtRefreshToken());
    assertEquals(expectedEmail, userService.findByRefreshToken(loginResponse.getJwtRefreshToken()).getEmail());
    assertTrue(loginResponse.getJwtRefreshTokenExpireDate() - beforeRequestTime > jwtRefreshTokenExpirationInMs);
  }

  @Test
  public void refreshJwtAccessToken() {
  }
}