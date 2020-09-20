import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import users from './users'
import categorySports from './categorySports'
import tournamentsOfSport from './tournamentsSport'

const rootReducer = combineReducers({
  users: users,
  categorySports: categorySports,
  tournamentsOfSport: tournamentsOfSport,
  toastr: toastrReducer
})

export default rootReducer