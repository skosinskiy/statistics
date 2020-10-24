import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import users from './users'
import sportsCategory from './sportsCategory'
import tournaments from './tournaments'
import rounds from './rounds'
import match from './matchDetail'

const rootReducer = combineReducers({
  users: users,
  sportsCategory: sportsCategory,
  tournaments: tournaments,
  rounds: rounds,
  matchDetail: match,
  toastr: toastrReducer
})

export default rootReducer