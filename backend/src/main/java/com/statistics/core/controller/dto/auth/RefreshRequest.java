package com.statistics.core.controller.dto.auth;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class RefreshRequest {

  @NotNull
  private String jwtRefreshToken;

}