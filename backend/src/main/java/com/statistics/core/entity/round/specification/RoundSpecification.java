package com.statistics.core.entity.round.specification;

import com.statistics.core.entity.base.specification.BaseSpecification;
import com.statistics.core.entity.round.Round;
import com.statistics.core.entity.round.Round_;
import com.statistics.core.entity.tournament.Tournament_;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@Component
public class RoundSpecification implements BaseSpecification<Round> {

  public Specification<Round> tournamentIdEquals(Long tournamentId) {
    return (root, query, cb) -> cb.equal(root.get(Round_.tournament).get(Tournament_.id), tournamentId);
  }

}
