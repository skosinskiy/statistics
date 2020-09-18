package com.statistics.core.entity.sport;

import com.statistics.core.entity.base.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "sports")
@Data
public class Sport extends BaseEntity {

  @Column(name = "title")
  private String title;

}
