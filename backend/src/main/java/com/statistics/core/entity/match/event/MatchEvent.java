package com.statistics.core.entity.match.event;

import com.statistics.core.entity.base.BaseEntity;
import com.statistics.core.entity.match.Match;
import com.statistics.core.entity.team.Team;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "match_events")
@Data
@EqualsAndHashCode(callSuper = true)
public class MatchEvent extends BaseEntity {

  @ManyToOne
  @JoinColumn(name = "match_id")
  private Match match;
  @Column(name = "type")
  @Enumerated(EnumType.STRING)
  private MatchEventType type;
  @Column(name = "minute")
  private Integer minute;
  @ManyToOne
  @JoinColumn(name = "team_id")
  private Team team;

}
