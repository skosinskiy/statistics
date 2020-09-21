import * as ACTIONS from './actions'
import { getTournaments } from '../tournaments/operations'
import api from '../../components/Axios/Axios'
import { toastr } from 'react-redux-toastr'

export const getSportsCategory = () => dispatch => {
  dispatch(ACTIONS.sportsCategoryLoading(true))
  api.get('/api/sports')
    .then(res => {
      dispatch(ACTIONS.sportsCategoryFetched(res))
    })
    .catch(reason => toastr.error('Error', reason))
    .finally(() => {
      dispatch(ACTIONS.sportsCategoryLoading(false))
    })
}

export const setChoiceCategoryOfSports = (id) => dispatch => {
  dispatch(ACTIONS.sportsCategoryChoice(id))
  dispatch(getTournaments(id))
}

export const sportsRouterHelper = (name) => dispatch => {
  console.log(name)
}