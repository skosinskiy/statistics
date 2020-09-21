import * as TYPES from './types'

const initialState = {
  tournaments: null,
  isTournamentsLoading: true,
  activeTournament: null // default null if choice have nuber
}

const tournamentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TOURNAMENTS_FETCHED:
      return {
        ...state,
        tournaments: action.payload
      }
    case TYPES.TOURNAMENTS_LOADING:
      return {
        ...state,
        isTournamentsLoading: action.payload
      }
    case TYPES.TOURNAMENT_CHOICE:
      return {
        ...state,
        activeTournament: action.payload
      }
    default:
      return {
        ...state
      }
  };
}

export default tournamentsReducer