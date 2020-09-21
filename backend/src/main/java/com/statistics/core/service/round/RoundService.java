package com.statistics.core.service.round;

import com.statistics.core.entity.round.Round;
import com.statistics.core.entity.round.specification.RoundSpecification;
import com.statistics.core.repository.round.RoundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import static com.cosium.spring.data.jpa.entity.graph.domain.EntityGraphUtils.fromAttributePaths;
import static com.statistics.core.entity.round.Round_.MATCH_LIST;

@Service
public class RoundService {

  private RoundRepository repository;
  private RoundSpecification specification;

  @Autowired
  public RoundService(RoundRepository repository, RoundSpecification specification) {
    this.repository = repository;
    this.specification = specification;
  }

  public Page<Round> findAllByTournamentId(Long tournamentId, Pageable pageable) {
    return repository.findAll(specification.tournamentIdEquals(tournamentId), pageable, fromAttributePaths(MATCH_LIST));
  }
}
