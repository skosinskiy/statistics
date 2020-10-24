import * as TYPES from './types'

const initialState = {
  match: null,
  isMatchesLoading: true
}

const matchesDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.MATCH_ID_FETCHED:
      return {
        ...state,
        match: action.payload
      }
    case TYPES.MATCH_ID_LOADING:
      return {
        ...state,
        isMatchesLoading: action.payload
      }
    default:
      return {
        ...state
      }
  };
}

export default matchesDetailReducer