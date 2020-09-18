package com.statistics.core.config;

import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springdoc.core.customizers.OpenApiCustomiser;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

import static java.util.Collections.singletonList;
import static java.util.Collections.singletonMap;

@Configuration
public class OpenApiConfig {

  private static final String SECURITY_SCHEME_NAME = "auth";

  @Bean
  public OpenApiCustomiser authorizationOpenApiCustomizer() {
    return openApi -> {
      openApi.getComponents().setSecuritySchemes(singletonMap(SECURITY_SCHEME_NAME, generateSecurityScheme()));

      openApi.getPaths().entrySet().stream()
          .filter(entry -> !isOpenPath(entry.getKey())).map(Map.Entry::getValue)
          .flatMap(pathItem -> pathItem.readOperations().stream())
          .forEach(operation -> operation.setSecurity(singletonList(getSecurityRequirement())));
    };
  }

  private SecurityScheme generateSecurityScheme() {
    return new SecurityScheme().type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("Bearer");
  }

  private boolean isOpenPath(String path) {
    return path.startsWith("/api/auth") || path.equals("/api/users/current");
  }

  private SecurityRequirement getSecurityRequirement() {
    return new SecurityRequirement().addList(SECURITY_SCHEME_NAME);
  }

}
