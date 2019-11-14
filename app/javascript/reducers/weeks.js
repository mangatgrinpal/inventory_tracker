import {
	SET_CURRENT_WEEK_START,
	SET_CURRENT_WEEK_END
} from '../actions/types';

const initialState = {
	currentWeekStart: '',
	currentWeekEnd: ''
}

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_CURRENT_WEEK_START:
			return {
				...state,
				currentWeekStart: payload
			};
		case SET_CURRENT_WEEK_END:
			return {
				...state,
				currentWeekEnd: payload
			};
		default:
			return state
	}
}