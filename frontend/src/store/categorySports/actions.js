import * as TYPES from './types'

export const categorySportsLoading = (isLoading) => ({
  type: TYPES.CATEGORY_SPORTS_LOADING,
  payload: isLoading
})

export const categorySportsFetched = (categorySports) => ({
  type: TYPES.CATEGORY_SPORTS_FETCHED,
  payload: categorySports
})

export const categorySportsChoice = (id) => ({
  type: TYPES.CATEGORY_SPORTS_CHOICE,
  payload: id
})