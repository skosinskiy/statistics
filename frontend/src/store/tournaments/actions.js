import * as TYPES from './types'

export const tournamentsLoading = (isLoading) => ({
  type: TYPES.TOURNAMENTS_LOADING,
  payload: isLoading
})

export const tournamentsFetched = (tournaments) => ({
  type: TYPES.TOURNAMENTS_FETCHED,
  payload: tournaments
})

export const tournamentChoice = (id) => ({
  type: TYPES.TOURNAMENT_CHOICE,
  payload: id
})