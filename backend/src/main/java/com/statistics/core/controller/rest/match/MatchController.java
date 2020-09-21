package com.statistics.core.controller.rest.match;

import com.statistics.core.controller.dto.response.match.MatchResponseDetailed;
import com.statistics.core.controller.rest.base.MappingController;
import com.statistics.core.service.match.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/matches")
public class MatchController extends MappingController {

  private MatchService matchService;

  @Autowired
  public MatchController(MatchService matchService) {
    this.matchService = matchService;
  }

  @GetMapping("{matchId}")
  @PreAuthorize("hasAuthority('VIEW')")
  public MatchResponseDetailed findById(@PathVariable Long matchId) {
    return mapEntityToResponseDto(matchService.findByIdDetailed(matchId), MatchResponseDetailed.class);
  }

}
