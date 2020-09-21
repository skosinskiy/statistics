import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import users from './users'
import sportsCategory from './sportsCategory'
import tournaments from './tournaments'

const rootReducer = combineReducers({
  users: users,
  sportsCategory: sportsCategory,
  tournaments: tournaments,
  toastr: toastrReducer
})

export default rootReducer