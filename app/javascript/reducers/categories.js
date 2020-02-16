import { 
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_FAILURE
} from '../actions/types';

const initialState = {
	categoryList: []
}

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				categoryList: payload
			}
		default:
			return state
	}
}