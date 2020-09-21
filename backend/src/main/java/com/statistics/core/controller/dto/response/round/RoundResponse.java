package com.statistics.core.controller.dto.response.round;

import com.statistics.core.controller.dto.response.match.MatchResponse;
import lombok.Data;

import java.util.List;

@Data
public class RoundResponse {

  private Long id;
  private Short number;
  private List<MatchResponse> matchList;

}
