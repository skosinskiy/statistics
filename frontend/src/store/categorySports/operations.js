import * as ACTIONS from './actions'
import api from '../../components/Axios/Axios'
import { toastr } from 'react-redux-toastr'

export const getCategorySports = () => dispatch => {
  dispatch(ACTIONS.categorySportsLoading(true))
  api.get('/api/sports')
    .then(res => {
      dispatch(ACTIONS.categorySportsFetched(res))
    })
    .catch(reason => toastr.error('Error', reason))
    .finally(() => {
      dispatch(ACTIONS.categorySportsLoading(false))
    })
}

export const setChoiceCategoryOfSports = (id) => dispatch => {
  dispatch(ACTIONS.categorySportsChoice(id))
}