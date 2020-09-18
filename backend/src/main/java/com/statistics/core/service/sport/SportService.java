package com.statistics.core.service.sport;

import com.statistics.core.entity.sport.Sport;
import com.statistics.core.repository.sport.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SportService {

  @Autowired
  private SportRepository repository;

  public SportService(SportRepository repository) {
    this.repository = repository;
  }

  public List<Sport> findAll() {
    return repository.findAll();
  }
}
