import React from 'react'
import { withRouter } from 'react-router-dom'
// redux
import { useSelector, useDispatch } from 'react-redux'
// material
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer'
// import SportsBaseballIcon from '@material-ui/icons/SportsBaseball'
// styles
import './TournamentsList.scss'
//  redux
import { setChoiceTournament } from '../../../store/tournaments/operations'

export const TournamentsList = () => {
  const dispatch = useDispatch()
  const tournaments = useSelector(state => state.tournaments.tournaments)
  const activeTournament = useSelector(state => state.tournaments.activeTournament)

  const changeActiveTournament = (event, newValue) => {
    dispatch(setChoiceTournament(newValue))
  }

  return (
    <BottomNavigation showLabels
      value={activeTournament}
      className="tournaments-list"
      onChange={changeActiveTournament}>
      {
        tournaments ? tournaments.map(tournament => {
          return <BottomNavigationAction
            className="tournaments-list_item"
            key={'id_' + tournament.id}
            label={tournament.title}
            icon={<SportsSoccerIcon />}
          />
        }) : null
      }
    </BottomNavigation>
  )
}

export default withRouter(TournamentsList)