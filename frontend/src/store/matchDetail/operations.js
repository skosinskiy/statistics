import * as ACTIONS from './actions'
import api from '../../components/Axios/Axios'
import { toastr } from 'react-redux-toastr'

export const findMatchDetails = (id) => dispatch => {
  dispatch(ACTIONS.matchFetched(null))
  dispatch(ACTIONS.matchLoading(true))
  api.get('/api/matches/' + id)
    .then(res => {
      console.log('match id info: ', res)
      dispatch(ACTIONS.matchFetched(res))
    })
    .catch(reason => toastr.error('Error', reason))
    .finally(() => {
      dispatch(ACTIONS.matchLoading(false))
    })
}
