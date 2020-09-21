package com.statistics.core.entity.round;

import com.statistics.core.entity.base.BaseEntity;
import com.statistics.core.entity.match.Match;
import com.statistics.core.entity.tournament.Tournament;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "rounds")
@Data
@EqualsAndHashCode(callSuper = true)
public class Round extends BaseEntity {

  @Column(name = "number")
  private Short number;
  @ManyToOne
  @JoinColumn(name = "tournament_id")
  private Tournament tournament;
  @ManyToMany(mappedBy = "round")
  private List<Match> matchList;

}
