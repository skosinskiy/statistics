import * as TYPES from './types'

export const tournamentsOfSportLoading = (isLoading) => ({
  type: TYPES.TOURNAMENTS_SPORT_LOADING,
  payload: isLoading
})

export const tournamentsOfSportFetched = (tournaments) => ({
  type: TYPES.TOURNAMENTS_SPORT_FETCHED,
  payload: tournaments
})

export const tournamentOfSportChoice = (id) => ({
  type: TYPES.TOURNAMENT_SPORT_CHOICE,
  payload: id
})