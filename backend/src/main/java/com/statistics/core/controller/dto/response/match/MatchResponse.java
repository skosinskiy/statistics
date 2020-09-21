package com.statistics.core.controller.dto.response.match;

import com.statistics.core.controller.dto.response.team.TeamResponse;
import com.statistics.core.entity.match.MatchState;
import lombok.Data;

import java.time.Instant;

@Data
public class MatchResponse {

  private Long id;
  private Instant date;
  private TeamResponse homeTeam;
  private TeamResponse awayTeam;
  private Integer homeScore;
  private Integer awayScore;
  private MatchState state;

}
