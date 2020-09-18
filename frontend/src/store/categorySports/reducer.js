import * as TYPES from './types'

const initialState = {
	categorySports: null,
	isCategorySportsLoading: true
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.CATEGORY_SPORTS_FETCHED:
			return {
				...state,
				categorySports: action.payload
			};
		case TYPES.CATEGORY_SPORTS_LOADING:
			return {
				...state,
				isCategorySportsLoading: action.payload
			};
		default:
			return { 
				...state 
			};
	};
};

export default usersReducer;