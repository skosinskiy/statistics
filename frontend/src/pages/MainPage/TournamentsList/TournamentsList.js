import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
// redux
import { useSelector } from 'react-redux'
// material
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer'
// import SportsBaseballIcon from '@material-ui/icons/SportsBaseball'
// styles
import './TournamentsList.scss'

export const TournamentsList = props => {
  const tournaments = useSelector(state => state.tournaments.tournaments)
  const [value, setValue] = useState(0) // default first
  const changeTournamentsItem = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation showLabels
      value={value}
      className="tournaments-list"
      onChange={changeTournamentsItem}>
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