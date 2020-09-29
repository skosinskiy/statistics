import * as ACTIONS from './actions'
import api from '../../components/Axios/Axios'
import { toastr } from 'react-redux-toastr'

export const findAllRounds = (id) => dispatch => { // id of sport
  dispatch(ACTIONS.roundsLoading(true))
  api.get('/api/rounds/tournament/' + id)
    .then(res => {
      dispatch(ACTIONS.roundsFetched(res))
    })
    .catch(reason => toastr.error('Error', reason))
    .finally(() => {
      dispatch(ACTIONS.roundsLoading(false))
    })
}
