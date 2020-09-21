import React from 'react'
// components
import { LinearIndeterminate } from '../../../components/LinearIndeterminate/LinearIndeterminate'
// redux
import { useSelector, useDispatch } from 'react-redux'

export const Sports = (props) => {

  const isTournamentsLoading = useSelector(state => state.tournaments.isTournamentsLoading)
  const tournaments = useSelector(state => state.tournaments.tournaments)

  if (isTournamentsLoading && !tournaments) {
    console.log('in if', props.match.params.id)
  }
  
  return (
    <React.Fragment>
      { isTournamentsLoading ? <LinearIndeterminate></LinearIndeterminate> : <div>
        We in sports component info;
      </div> }
    </React.Fragment>
  )
}