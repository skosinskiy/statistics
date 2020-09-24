import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
// components
import { LinearIndeterminate } from '../../../components/LinearIndeterminate/LinearIndeterminate'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setChoiceCategoryOfSports } from '../../../store/sportsCategory/operations'

export const Sports = (props) => {
  const dispatch = useDispatch()
  const [redirctToHome, setRedirctToHome] = useState(false)
  const isTournamentsLoading = useSelector(state => state.tournaments.isTournamentsLoading)
  const tournaments = useSelector(state => state.tournaments.tournaments)
  const sports = (useSelector(state => state.sportsCategory.sportsCategory))

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
  }, [isTournamentsLoading, tournaments, sports, props.match.params.id, dispatch])

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