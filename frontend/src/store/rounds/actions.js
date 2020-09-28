import * as TYPES from './types'

export const roundsLoading = (isLoading) => ({
  type: TYPES.TOURNAMENTS_LOADING,
  payload: isLoading
})

export const roundsFetched = (rounds) => ({
  type: TYPES.TOURNAMENTS_FETCHED,
  payload: rounds
})
