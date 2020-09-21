import React from 'react'
// components
import { LinearIndeterminate } from '../../../components/LinearIndeterminate/LinearIndeterminate'
// redux
import { useSelector } from 'react-redux'

export const Sports = () => {
  const isTournamentsLoading = useSelector(state => state.tournaments.isTournamentsLoading)
  
  return (
    <React.Fragment>
      { isTournamentsLoading ? <LinearIndeterminate></LinearIndeterminate> : <div>
        We in sports component info;
      </div> }
    </React.Fragment>
  )
}