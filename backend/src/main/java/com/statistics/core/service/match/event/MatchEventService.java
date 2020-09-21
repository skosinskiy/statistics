package com.statistics.core.service.match.event;

import com.statistics.core.entity.match.event.MatchEvent;
import com.statistics.core.entity.match.event.specification.MatchEventSpecification;
import com.statistics.core.repository.match.event.MatchEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchEventService {

  private MatchEventRepository repository;
  private MatchEventSpecification specification;

  @Autowired
  public MatchEventService(MatchEventRepository repository, MatchEventSpecification specification) {
    this.repository = repository;
    this.specification = specification;
  }

  public List<MatchEvent> findAllByMatchId(Long matchId) {
    return repository.findAll(specification.matchIdEquals(matchId));
  }
}
