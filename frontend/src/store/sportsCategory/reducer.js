import * as TYPES from './types'

const initialState = {
  sportsCategory: null,
  isSportsCategoryLoading: true,
  choiceCategory: null // default null if choice have nuber
}

const sportsCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CATEGORY_SPORTS_FETCHED:
      return {
        ...state,
        sportsCategory: action.payload
      }
    case TYPES.CATEGORY_SPORTS_LOADING:
      return {
        ...state,
        isSportsCategoryLoading: action.payload
      }
    case TYPES.CATEGORY_SPORTS_CHOICE:
      return {
        ...state,
        choiceCategory: action.payload
      }
    default:
      return {
        ...state
      }
  };
}

export default sportsCategoryReducer