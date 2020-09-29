import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
// components
import { LinearIndeterminate } from '../../../components/LinearIndeterminate/LinearIndeterminate'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setChoiceCategoryOfSports } from '../../../store/sportsCategory/operations'
import { findAllRounds } from '../../../store/rounds/operations'

export const Sports = (props) => {
  const dispatch = useDispatch()
  const [redirctToHome, setRedirctToHome] = useState(false)

  const sports = (useSelector(state => state.sportsCategory.sportsCategory))

  const activeIdOfTournament = useSelector(state => state.tournaments.activeTournamentId)
  const tournaments = useSelector(state => state.tournaments.tournaments)
  const isTournamentsLoading = useSelector(state => state.tournaments.isTournamentsLoading)

  const roundsOfChoiceTournament = useSelector(state => state.rounds.rounds)
  const isRoundsLoading = useSelector(state => state.rounds.isRoundsLoading)

  useEffect(() => {
    if (isTournamentsLoading && !tournaments && sports) {
      const actualCategory = sports.find((category) => {
        return category.title === props.match.params.id
      })
      if (actualCategory) {
        dispatch(setChoiceCategoryOfSports(actualCategory.id))
      } else {
        setRedirctToHome(true)
      }
    }
    if (activeIdOfTournament && !isTournamentsLoading) dispatch(findAllRounds(activeIdOfTournament))
  }, [isTournamentsLoading, tournaments, sports, props.match.params.id, activeIdOfTournament, dispatch])

  if (roundsOfChoiceTournament != null && !isRoundsLoading && !isTournamentsLoading) {
    console.log(roundsOfChoiceTournament.content)
  }
  if (redirctToHome) {
    return <Redirect to='/' />
  }

  return (
    <React.Fragment>
      { isTournamentsLoading ? <LinearIndeterminate></LinearIndeterminate> : <div>
        We in sports component info;
      </div> }
    </React.Fragment>
  )
}