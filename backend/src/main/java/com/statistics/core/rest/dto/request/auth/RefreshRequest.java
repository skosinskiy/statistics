package com.statistics.core.rest.dto.request.auth;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class RefreshRequest {

  @NotNull
  private String jwtRefreshToken;

}