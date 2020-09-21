package com.statistics.core.controller.rest.round;

import com.statistics.core.controller.dto.response.round.RoundResponse;
import com.statistics.core.controller.rest.base.MappingController;
import com.statistics.core.service.round.RoundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/rounds")
public class RoundController extends MappingController {

  private RoundService service;

  @Autowired
  public RoundController(RoundService service) {
    this.service = service;
  }

  @GetMapping("tournament/{tournamentId}")
  @PreAuthorize("hasAuthority('VIEW')")
  public Page<RoundResponse> findAllRounds(@PathVariable Long tournamentId, Pageable pageable) {
    return mapEntityPage(service.findAllByTournamentId(tournamentId, pageable), RoundResponse.class);
  }

}
