import {
	SET_CURRENT_WEEK_RANGE
} from '../actions/types';

const initialState = {
	currentWeekRange: []
}

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_CURRENT_WEEK_RANGE:
			return {
				...state,
				currentWeekRange: payload
			};
		default:
			return state
	}
}