import React from 'react'
// services
import { parseDate } from '../../../../service/dateParsers'
// redux
import { useDispatch } from 'react-redux'
import { findMatchDetails } from '../../../../store/matchDetail/operations'
// style
import './RoundItem.scss'

export const RoundItem = (props) => {
  const dispatch = useDispatch()
  const { homeTeam, awayTeam, homeScore, awayScore, state, date, id } = props.item
  const dateParsed = date ? parseDate(date) : null
  const score = state === 'SCHEDULED' ? 'ꟷ - ꟷ' : homeScore + ' - ' + awayScore

  const openDetailWindow = () => {
    dispatch(findMatchDetails(id))
  }

  return (
    <React.Fragment>
      <div className="item-wrapper" onClick={openDetailWindow}>
        <div className="item-time">{ dateParsed }</div>
        <div className="item-main">
          <span className="home-name">{homeTeam.title}</span>
          <span className="score">{ score }
          </span>
          <span className="away-name">{awayTeam.title}</span>
        </div>
        <div className="item-state">{state}</div>
      </div>
    </React.Fragment>
  )
}