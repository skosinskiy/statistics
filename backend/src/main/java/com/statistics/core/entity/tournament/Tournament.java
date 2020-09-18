package com.statistics.core.entity.tournament;

import com.statistics.core.entity.base.BaseEntity;
import com.statistics.core.entity.sport.Sport;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tournaments")
@Data
@EqualsAndHashCode(callSuper = true)
public class Tournament extends BaseEntity {

  @Column(name = "title")
  private String title;
  @ManyToOne
  @JoinColumn(name = "sport_id")
  private Sport sport;

}
