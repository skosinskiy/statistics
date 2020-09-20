import * as TYPES from './types'

const initialState = {
  categorySports: null,
  isCategorySportsLoading: true,
  choiceCategory: null // default null if choice have nuber
}

const categorySportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CATEGORY_SPORTS_FETCHED:
      return {
        ...state,
        categorySports: action.payload
      }
    case TYPES.CATEGORY_SPORTS_LOADING:
      return {
        ...state,
        isCategorySportsLoading: action.payload
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

export default categorySportsReducer