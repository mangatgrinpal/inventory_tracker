import {
	FETCH_RECORDS_SUCCESS,
	FETCH_RECORDS_ERROR
} from '../actions/types';

const initialState = {
	records: []
}

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case FETCH_RECORDS_SUCCESS:
			return {
				...state,
				records: payload
			}
		case FETCH_RECORDS_ERROR:
			return {
				...state,
				records: payload
			}
		default:
			return state
	
	}
}