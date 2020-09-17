package com.statistics.core.entity.user;

import org.springframework.security.core.GrantedAuthority;

public enum Permission implements GrantedAuthority {
  VIEW;

  @Override
  public String getAuthority() {
    return this.toString();
  }
}