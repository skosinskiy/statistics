package com.statistics.core;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.statistics.core.controller.dto.auth.LoginRequest;
import com.statistics.core.controller.dto.response.auth.LoginResponse;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

public class TestUtils {

  public static String getAuthHeader(MockMvc mockMvc, ObjectMapper objectMapper) throws Exception {
    LoginRequest loginRequest = new LoginRequest();
    loginRequest.setEmail("user1@gmail.com");
    loginRequest.setPassword("admin");
    MockHttpServletResponse authResponse = mockMvc.perform(post("/api/auth")
        .content(objectMapper.writeValueAsBytes(loginRequest))
        .contentType(MediaType.APPLICATION_JSON)
    ).andReturn().getResponse();

    LoginResponse loginResponse = objectMapper.readValue(authResponse.getContentAsString(), LoginResponse.class);
    return loginResponse.getTokenType() + loginResponse.getJwtAccessToken();
  }

}
