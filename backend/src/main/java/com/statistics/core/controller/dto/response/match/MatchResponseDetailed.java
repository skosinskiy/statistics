package com.statistics.core.controller.dto.response.match;

import com.statistics.core.controller.dto.response.match.event.EventResponse;
import com.statistics.core.controller.dto.response.match.statistic.StatisticResponse;
import com.statistics.core.controller.dto.response.team.TeamResponse;
import com.statistics.core.entity.match.MatchState;
import lombok.Data;

import java.time.Instant;
import java.util.List;

@Data
public class MatchResponseDetailed {

  private Instant date;
  private TeamResponse homeTeam;
  private TeamResponse awayTeam;
  private Integer homeScore;
  private Integer awayScore;
  private MatchState state;
  private List<EventResponse> eventList;
  private List<StatisticResponse> statisticList;

}
