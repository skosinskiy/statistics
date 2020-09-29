import * as TYPES from './types'

const initialState = {
  tournaments: null,
  isTournamentsLoading: true,
  activeTournamentInList: null, // default null if choice have number
  activeTournamentId: null
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
        activeTournamentInList: action.payload,
        activeTournamentId: state.tournaments[action.payload].id
      }
    default:
      return {
        ...state
      }
  };
}

export default tournamentsReducer