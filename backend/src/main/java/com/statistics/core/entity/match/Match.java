package com.statistics.core.entity.match;

import com.statistics.core.entity.base.BaseEntity;
import com.statistics.core.entity.match.event.MatchEvent;
import com.statistics.core.entity.match.statistic.MatchStatistic;
import com.statistics.core.entity.round.Round;
import com.statistics.core.entity.team.Team;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "matches")
@Data
@EqualsAndHashCode(callSuper = true)
public class Match extends BaseEntity {

  @Column(name = "date")
  private Instant date;
  @ManyToOne
  @JoinColumn(name = "round_id")
  private Round round;
  @ManyToOne
  @JoinColumn(name = "home_team_id")
  private Team homeTeam;
  @ManyToOne
  @JoinColumn(name = "away_team_id")
  private Team awayTeam;
  @Column(name = "home_score")
  private Integer homeScore;
  @Column(name = "away_score")
  private Integer awayScore;
  @Column(name = "state")
  @Enumerated(EnumType.STRING)
  private MatchState state;
  @OneToMany(mappedBy = "match")
  private List<MatchEvent> eventList;
  @OneToMany(mappedBy = "match")
  private List<MatchStatistic> statisticList;

}
