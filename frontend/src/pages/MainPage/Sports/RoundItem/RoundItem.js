import React from 'react'

// style
import './RoundItem.scss'

export const RoundItem = (props) => {
  const { homeTeam, awayTeam, homeScore, awayScore, state, date } = props.item
  let parseDateStr
  const parseDate = (dateISO) => {
    const newDate = new Date(dateISO)
    parseDateStr = newDate.getDate() + '-' + ('0' + (newDate.getMonth() + 1)).slice(-2) + '-' + newDate.getFullYear() + ' ' + ('0' + newDate.getHours()).slice(-2) + ':' + ('0' + newDate.getMinutes()).slice(-2)
  }
  if (date) parseDate(date)
  return (<div className="item-wrapper">
    <div className="item-time">{ parseDateStr }</div>
    <div className="item-main">
      <span className="home-name">{homeTeam.title}</span>
      <span className="score">{state === 'SCHEDULED'
        ? 'ꟷ - ꟷ'
        : homeScore + ' - ' + awayScore }
      </span>
      <span className="away-name">{awayTeam.title}</span>
    </div>
    <div className="item-state">{state}</div>
  </div>
  )
}