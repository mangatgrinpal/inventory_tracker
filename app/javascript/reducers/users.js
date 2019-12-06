import {
	USER_SIGN_UP,
	USER_SIGN_IN,
	USER_SIGN_OUT
} from './types';

const intialState = {
	currentUser: null,
	loading: false
}

export default function(state=initialState, action) {
	const { type, payload } = action;
	switch(type) {
		case USER_SIGN_UP:
			return {
				...state,
				currentUser: payload
			}
		default:
			return state
	}
}