package com.statistics.core.service.match.statistic;

import com.statistics.core.entity.match.statistic.MatchStatistic;
import com.statistics.core.entity.match.statistic.specification.MatchStatisticSpecification;
import com.statistics.core.repository.match.statistic.MatchStatisticRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchStatisticService {

  private MatchStatisticRepository repository;
  private MatchStatisticSpecification specification;

  @Autowired
  public MatchStatisticService(MatchStatisticRepository repository, MatchStatisticSpecification specification) {
    this.repository = repository;
    this.specification = specification;
  }

  public List<MatchStatistic> findAllByMatchId(Long matchId) {
    return repository.findAll(specification.matchIdEquals(matchId));
  }
}
