package com.statistics.core.controller.dto.response.match.statistic;

import com.statistics.core.controller.dto.response.team.TeamResponse;
import com.statistics.core.entity.match.statistic.MatchStatisticFieldName;
import com.statistics.core.entity.match.statistic.MatchStatisticFieldType;
import lombok.Data;

@Data
public class StatisticResponse {

  private TeamResponse team;
  private MatchStatisticFieldType type;
  private MatchStatisticFieldName name;
  private String title;
  private Integer value;

}
