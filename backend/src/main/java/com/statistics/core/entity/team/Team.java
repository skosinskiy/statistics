package com.statistics.core.entity.team;

import com.statistics.core.entity.base.BaseEntity;
import com.statistics.core.entity.tournament.Tournament;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "teams")
@Data
@EqualsAndHashCode(callSuper = true)
public class Team extends BaseEntity {

  @Column(name = "title")
  private String title;
  @ManyToOne
  @JoinColumn(name = "tournament_id")
  private Tournament tournament;


}
