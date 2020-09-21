import * as ACTIONS from './actions'
import api from '../../components/Axios/Axios'
import { toastr } from 'react-redux-toastr'

export const getTournaments = (id) => dispatch => { // id of sport
  console.log('getTournaments', id)
  dispatch(ACTIONS.tournamentsLoading(true))
  api.get('/api/tournaments/sport/' + id)
    .then(res => {
      dispatch(ACTIONS.tournamentsFetched(res))
    })
    .catch(reason => toastr.error('Error', reason))
    .finally(() => {
      dispatch(ACTIONS.tournamentsLoading(false))
    })
}

export const setChoiceTournament = (id) => dispatch => {
  dispatch(ACTIONS.tournamentChoice(id))
}