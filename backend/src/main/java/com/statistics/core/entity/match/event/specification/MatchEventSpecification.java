package com.statistics.core.entity.match.event.specification;

import com.statistics.core.entity.base.specification.BaseSpecification;
import com.statistics.core.entity.match.Match_;
import com.statistics.core.entity.match.event.MatchEvent;
import com.statistics.core.entity.match.event.MatchEvent_;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@Component
public class MatchEventSpecification implements BaseSpecification<MatchEvent> {

  public Specification<MatchEvent> matchIdEquals(Long matchId) {
    return (root, query, cb) -> cb.equal(root.get(MatchEvent_.match).get(Match_.id), matchId);
  }

}
