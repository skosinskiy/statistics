import * as TYPES from './types'

const initialState = {
  rounds: null,
  isRoundsLoading: true
}

const roundsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ROUNDS_FETCHED:
      return {
        ...state,
        rounds: action.payload
      }
    case TYPES.ROUNDS_LOADING:
      return {
        ...state,
        isRoundsLoading: action.payload
      }
    default:
      return {
        ...state
      }
  };
}

export default roundsReducer