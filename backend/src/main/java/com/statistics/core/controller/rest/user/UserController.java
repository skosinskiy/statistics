package com.statistics.core.controller.rest.user;

import com.statistics.core.controller.dto.response.user.UserResponse;
import com.statistics.core.controller.rest.base.MappingController;
import com.statistics.core.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/users")
public class UserController extends MappingController {

  private UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("current")
  public UserResponse getCurrentUser() {
    return mapEntityToResponseDto(userService.getCurrentUser(), UserResponse.class);
  }

}