import {
	FETCH_RECORDS_SUCCESS,
	FETCH_RECORDS_ERROR
} from '../actions/types';

const initialState = {
	recordList: []
}

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case FETCH_RECORDS_SUCCESS:
			return {
				...state,
				recordList: payload
			}
		case FETCH_RECORDS_ERROR:
			return {
				...state,
				recordList: payload
			}
		default:
			return state
	
	}
}