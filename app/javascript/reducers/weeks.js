import {
	SET_CURRENT_WORK_DAY,
	SET_PREVIOUS_WORK_DAY
} from '../actions/types';

const initialState = {
	currentWorkDay: [],
	previousWorkDay: []
}

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_CURRENT_WORK_DAY:
			return {
				...state,
				currentWorkDay: payload
			};
		case SET_PREVIOUS_WORK_DAY:
			return {
				...state,
				previousWorkDay: payload
			}
		default:
			return state
	}
}