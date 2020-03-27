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
		default:
			return state
	
	}
}