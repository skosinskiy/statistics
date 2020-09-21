package com.statistics.core.entity.match.statistic;

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
@Table(name = "match_statistics")
@Data
@EqualsAndHashCode(callSuper = true)
public class MatchStatistic extends BaseEntity {

  @ManyToOne
  @JoinColumn(name = "match_id")
  private Match match;
  @Column(name = "type")
  @Enumerated(EnumType.STRING)
  private MatchStatisticFieldType type;
  @Column(name = "name")
  @Enumerated(EnumType.STRING)
  private MatchStatisticFieldName name;
  @Column(name = "title")
  private String title;
  @Column(name = "value")
  private Integer value;
  @ManyToOne
  @JoinColumn(name = "team_id")
  private Team team;

}
