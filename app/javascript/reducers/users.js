import {
	USER_SIGN_UP_REQUEST,
	USER_SIGN_UP_SUCCESS,
	USER_SIGN_UP_FAILURE,
	USER_SIGN_IN_REQUEST,
	USER_SIGN_IN_SUCCESS,
	USER_SIGN_IN_FAILURE,
	USER_SIGN_OUT_REQUEST,
	USER_SIGN_OUT_SUCCESS,
	USER_SIGN_OUT_FAILURE
} from '../actions/types';

const initialState = {
	currentUser: null,
	loading: false,
	errorMessages: []

}

export default function(state=initialState, action) {
	const { type, payload } = action;
	switch(type) {
		case USER_SIGN_UP_REQUEST:
		case USER_SIGN_IN_REQUEST:
			return {
				...state,
				loading: true
			};
		case USER_SIGN_UP_SUCCESS:
			return {
				...state,
				currentUser: payload,
				loading: false
			};
		case USER_SIGN_UP_FAILURE:
			return {
				...state,
				currentUser: null,
				loading: false
			};
		case USER_SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: payload,
				loading: false,
				errorMessages: []
			};
		case USER_SIGN_IN_FAILURE:
			return {
				...state,
				currentUser: null,
				loading: false,
				errorMessages: payload
			}
		case USER_SIGN_OUT_REQUEST:
			return {
				...state,
				currentUser: payload,
				loading: false
			};
		case USER_SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				loading: false
			};
		case USER_SIGN_OUT_FAILURE:
			return {
				...state,
				loading: false
			}
		default:
			return state
	}
}