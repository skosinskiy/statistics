import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import users from './users'
import categorySports from './categorySports'

const rootReducer = combineReducers({
  users: users,
  categorySports: categorySports,
  toastr: toastrReducer
})

export default rootReducer