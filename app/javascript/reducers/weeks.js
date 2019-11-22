import {
	SET_CURRENT_WORK_DAY
} from '../actions/types';

const initialState = {
	currentWorkDay: []
}

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_CURRENT_WORK_DAY:
			return {
				...state,
				currentWorkDay: payload
			};
		default:
			return state
	}
}