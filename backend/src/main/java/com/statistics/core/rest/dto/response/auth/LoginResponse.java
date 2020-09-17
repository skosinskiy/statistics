package com.statistics.core.rest.dto.response.auth;

import lombok.Data;

@Data
public class LoginResponse {

  private String jwtAccessToken;
  private String jwtRefreshToken;
  private Long jwtRefreshTokenExpireDate;
  private String tokenType;

}