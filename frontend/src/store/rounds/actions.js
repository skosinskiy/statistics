import * as TYPES from './types'

export const roundsLoading = (isLoading) => ({
  type: TYPES.ROUNDS_LOADING,
  payload: isLoading
})

export const roundsFetched = (rounds) => ({
  type: TYPES.ROUNDS_FETCHED,
  payload: rounds
})
