import * as TYPES from './types'

const initialState = {
  tournaments: null,
  isTournamentsLoading: true,
  activeTournament: null // default null if choice have nuber
}

const tournamentsOfSportReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TOURNAMENTS_SPORT_FETCHED:
      return {
        ...state,
        tournaments: action.payload
      }
    case TYPES.TOURNAMENTS_SPORT_LOADING:
      return {
        ...state,
        isTournamentsLoading: action.payload
      }
    case TYPES.TOURNAMENT_SPORT_CHOICE:
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

export default tournamentsOfSportReducer