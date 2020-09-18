package com.statistics.core.rest.controller.sport;

import com.statistics.core.rest.controller.base.MappingController;
import com.statistics.core.rest.dto.response.sport.SportResponse;
import com.statistics.core.service.sport.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/sports")
public class SportController extends MappingController {

  @Autowired
  private SportService sportService;

  public SportController(SportService sportService) {
    this.sportService = sportService;
  }

  @GetMapping
  @PreAuthorize("hasAuthority('VIEW')")
  public List<SportResponse> findAll() {
    return mapEntityList(sportService.findAll(), SportResponse.class);
  }
}
