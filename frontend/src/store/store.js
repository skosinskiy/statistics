import { applyMiddleware, createStore, compose } from 'redux'
import RootReducer from './rootReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store