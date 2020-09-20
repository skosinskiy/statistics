import * as ACTIONS from './actions'
import api from '../../components/Axios/Axios'
import { toastr } from 'react-redux-toastr'

export const getTournamentsOfSport = (id) => dispatch => { // id of sport
  console.log('in getTournamentsOfSport:', id)
  dispatch(ACTIONS.tournamentsOfSportLoading(true))
  api.get('/tournaments/sport/' + id)
    .then(res => {
      dispatch(ACTIONS.tournamentsOfSportFetched(res))
    })
    .catch(reason => toastr.error('Error', reason))
    .finally(() => {
      dispatch(ACTIONS.tournamentsOfSportLoading(false))
    })
}

export const setChoiceTournamentOfSport = (id) => dispatch => {
  dispatch(ACTIONS.tournamentOfSportChoice(id))
}