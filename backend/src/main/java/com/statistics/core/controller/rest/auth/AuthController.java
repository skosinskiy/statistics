package com.statistics.core.controller.rest.auth;

import com.statistics.core.controller.dto.auth.LoginRequest;
import com.statistics.core.controller.dto.auth.RefreshRequest;
import com.statistics.core.controller.dto.response.auth.LoginResponse;
import com.statistics.core.security.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  private SecurityService securityService;

  @Autowired
  public AuthController(SecurityService securityService) {
    this.securityService = securityService;
  }

  @PostMapping
  public ResponseEntity<LoginResponse> generateJwt(@Valid @RequestBody LoginRequest loginRequest) {
    return ResponseEntity.ok(securityService.setAuthenticationAndGenerateJwt(loginRequest));
  }

  @PostMapping("refresh")
  public ResponseEntity<LoginResponse> getCurrentUser(@Valid @RequestBody RefreshRequest refreshRequest) {
    return ResponseEntity.ok(securityService.refreshToken(refreshRequest));
  }

}