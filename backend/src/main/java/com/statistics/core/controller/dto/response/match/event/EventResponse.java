package com.statistics.core.controller.dto.response.match.event;

import com.statistics.core.controller.dto.response.team.TeamResponse;
import com.statistics.core.entity.match.event.MatchEventType;
import lombok.Data;

@Data
public class EventResponse {

  private TeamResponse team;
  private MatchEventType type;
  private Integer minute;

}
