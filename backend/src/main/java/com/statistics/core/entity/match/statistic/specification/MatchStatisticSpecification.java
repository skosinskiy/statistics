package com.statistics.core.entity.match.statistic.specification;

import com.statistics.core.entity.base.specification.BaseSpecification;
import com.statistics.core.entity.match.Match_;
import com.statistics.core.entity.match.statistic.MatchStatistic;
import com.statistics.core.entity.match.statistic.MatchStatistic_;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@Component
public class MatchStatisticSpecification implements BaseSpecification<MatchStatistic> {

  public Specification<MatchStatistic> matchIdEquals(Long matchId) {
    return (root, query, cb) -> cb.equal(root.get(MatchStatistic_.match).get(Match_.id), matchId);
  }

}
