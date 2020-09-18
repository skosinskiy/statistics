import * as ACTIONS from './actions'
import api from '../../components/Axios/Axios'
import { toastr } from 'react-redux-toastr'

export const getCategorySports = () => dispatch => {
  console.log('!!!!!!!!!!!!!!')
  dispatch(ACTIONS.categorySportsLoading(true))
  api.get('/api/sports')
    .then(res => {
      console.log('in action', res)
      dispatch(ACTIONS.categorySportsFetched(res))
    })
    .catch(reason => toastr.error('Error', reason))
    .finally(() => {
      dispatch(ACTIONS.categorySportsLoading(false))
    })
}