package com.statistics.core.service.match;

import com.statistics.core.entity.match.Match;
import com.statistics.core.error.exception.NoDataFoundException;
import com.statistics.core.repository.match.MatchRepository;
import com.statistics.core.service.match.event.MatchEventService;
import com.statistics.core.service.match.statistic.MatchStatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchService {

  private MatchRepository repository;
  private MatchStatisticService matchStatisticService;
  private MatchEventService matchEventService;

  @Autowired
  public MatchService(MatchRepository repository,
                      MatchStatisticService matchStatisticService,
                      MatchEventService matchEventService) {
    this.repository = repository;
    this.matchStatisticService = matchStatisticService;
    this.matchEventService = matchEventService;
  }

  public Match findByIdDetailed(Long id) {
    Match match = repository.findById(id)
        .orElseThrow(() -> new NoDataFoundException("Match not found with id " + id));
    match.setEventList(matchEventService.findAllByMatchId(id));
    match.setStatisticList(matchStatisticService.findAllByMatchId(id));
    return match;
  }
}
