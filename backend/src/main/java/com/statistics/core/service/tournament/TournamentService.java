package com.statistics.core.service.tournament;

import com.statistics.core.entity.tournament.Tournament;
import com.statistics.core.entity.tournament.specification.TournamentSpecification;
import com.statistics.core.repository.tournament.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TournamentService {

  private TournamentRepository repository;
  private TournamentSpecification specification;

  @Autowired
  public TournamentService(TournamentRepository repository, TournamentSpecification specification) {
    this.repository = repository;
    this.specification = specification;
  }

  public List<Tournament> findAllBySportId(Integer sportId) {
    return repository.findAll(specification.sportIdEquals(sportId));
  }
}
