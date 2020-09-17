package com.statistics.core.rest.dto.response.user;

import com.statistics.core.entity.user.Permission;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class UserResponse {

  private String email;
  private String firstName;
  private String lastName;
  private Date accountExpireDate;
  private List<Permission> permissions;

}