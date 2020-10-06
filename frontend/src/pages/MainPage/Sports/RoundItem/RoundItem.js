import React from 'react'
// services
import { parseDate } from '../../../../service/dateParsers'
// style
import './RoundItem.scss'

export const RoundItem = (props) => {
  const { homeTeam, awayTeam, homeScore, awayScore, state, date } = props.item
  const dateParsed = date ? parseDate(date) : null
  const score = state === 'SCHEDULED' ? 'ꟷ - ꟷ' : homeScore + ' - ' + awayScore

  return (<div className="item-wrapper">
    <div className="item-time">{ dateParsed }</div>
    <div className="item-main">
      <span className="home-name">{homeTeam.title}</span>
      <span className="score">{ score }
      </span>
      <span className="away-name">{awayTeam.title}</span>
    </div>
    <div className="item-state">{state}</div>
  </div>
  )
}