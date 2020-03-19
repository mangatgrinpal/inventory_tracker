import { 
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_FAILURE,
	FETCH_TRACKABLE_ATTRIBUTES_REQUEST,
	FETCH_TRACKABLE_ATTRIBUTES_SUCCESS,
	FETCH_TRACKABLE_ATTRIBUTES_FAILURE
} from '../actions/types';

const initialState = {
	categoryList: [],
	trackableAttributeList: []
}

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				categoryList: payload
			}
		case FETCH_TRACKABLE_ATTRIBUTES_SUCCESS:
			return {
				...state,
				trackableAttributeList: payload
			}
		default:
			return state
	}
}