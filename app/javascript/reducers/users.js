import {
	USER_SIGN_UP,
	USER_SIGN_IN,
	USER_SIGN_OUT
} from '../actions/types';

const initialState = {
	currentUser: null,
	loading: false,
	isLoggedIn: false
}

export default function(state=initialState, action) {
	const { type, payload } = action;
	switch(type) {
		case USER_SIGN_UP:
			return {
				...state,
				currentUser: payload
			}
		case USER_SIGN_IN:
			return {
				...state,
				currentUser: payload
			}
		case USER_SIGN_OUT:
			return {
				...state,
				currentUser: payload
			}
		default:
			return state
	}
}