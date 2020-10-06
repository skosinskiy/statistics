import * as ACTIONS from './actions'
import api from '../../components/Axios/Axios'
import { toastr } from 'react-redux-toastr'

export const getTournaments = (id) => dispatch => {
  dispatch(ACTIONS.tournamentsLoading(true))
  api.get('/api/tournaments/sport/' + id)
    .then(res => {
      dispatch(ACTIONS.tournamentsFetched(res))
      dispatch(setActiveTournament(0))
    })
    .catch(reason => toastr.error('Error', reason))
    .finally(() => {
      dispatch(ACTIONS.tournamentsLoading(false))
    })
}

export const setActiveTournament = (id) => dispatch => {
  dispatch(ACTIONS.tournamentChoice(id))
}