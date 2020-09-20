import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getTournamentsOfSport } from '../../../store/tournamentsSport/operations'

export const TournamentsList = props => {
  const dispatch = useDispatch()

  const activeSportId = useSelector(state => state.categorySports.choiceCategory)
  console.log('activeSportId', activeSportId)
  useEffect((activeSportId) => dispatch(getTournamentsOfSport(activeSportId)), [dispatch])
  const tournaments = useSelector(state => state.tournamentsOfSport.tournaments)
  console.log(tournaments)

  return (
    <div>list</div>
  )
}

export default withRouter(TournamentsList)