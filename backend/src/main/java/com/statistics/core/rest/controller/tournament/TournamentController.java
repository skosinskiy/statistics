package com.statistics.core.rest.controller.tournament;

import com.statistics.core.entity.tournament.Tournament;
import com.statistics.core.rest.controller.base.MappingController;
import com.statistics.core.rest.dto.response.TournamentResponse;
import com.statistics.core.service.tournament.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/tournaments")
public class TournamentController extends MappingController {

  private TournamentService tournamentService;

  @Autowired
  public TournamentController(TournamentService tournamentService) {
    this.tournamentService = tournamentService;
  }

  @GetMapping("sport/{sportId}")
  @PreAuthorize("hasAuthority('VIEW')")
  public List<TournamentResponse> findAllBySportId(@PathVariable Integer sportId) {
    return mapEntityList(tournamentService.findAllBySportId(sportId), TournamentResponse.class);
  }

}
