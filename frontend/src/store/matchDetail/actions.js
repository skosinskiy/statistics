import * as TYPES from './types'

export const matchLoading = (isLoading) => ({
  type: TYPES.MATCH_ID_LOADING,
  payload: isLoading
})

export const matchFetched = (match) => ({
  type: TYPES.MATCH_ID_FETCHED,
  payload: match
})
