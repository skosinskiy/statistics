import * as TYPES from './types'

export const sportsCategoryLoading = (isLoading) => ({
  type: TYPES.CATEGORY_SPORTS_LOADING,
  payload: isLoading
})

export const sportsCategoryFetched = (sportsCategory) => ({
  type: TYPES.CATEGORY_SPORTS_FETCHED,
  payload: sportsCategory
})

export const sportsCategoryChoice = (id) => ({
  type: TYPES.CATEGORY_SPORTS_CHOICE,
  payload: id
})