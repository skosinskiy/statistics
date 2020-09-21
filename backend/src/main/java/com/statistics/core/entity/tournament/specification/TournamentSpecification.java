package com.statistics.core.entity.tournament.specification;

import com.statistics.core.entity.base.specification.BaseSpecification;
import com.statistics.core.entity.sport.Sport_;
import com.statistics.core.entity.tournament.Tournament;
import com.statistics.core.entity.tournament.Tournament_;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@Component
public class TournamentSpecification implements BaseSpecification<Tournament> {

  public Specification<Tournament> sportIdEquals(Long sportId) {
    return (root, query, cb) -> cb.equal(root.get(Tournament_.sport).get(Sport_.id), sportId);
  }

}
