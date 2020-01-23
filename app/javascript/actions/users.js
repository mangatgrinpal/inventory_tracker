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

import { 
	setAuthHeaders, 
	persistAuthHeadersInDeviceStorage 
} from '../utils/auth';

import axios from 'axios';

//consolidate these csrftokens into a single file later

const csrfToken = document.getElementsByName('csrf-token')[0].content

const headers = {
	'X-CSRF-Token': csrfToken,
	'Content-Type': 'application/json'
}

export const userSignUp = (email, password, passwordConfirmation, history) => async dispatch => {
	
	dispatch({
		type: USER_SIGN_UP_REQUEST
	})

	let body = JSON.stringify({
		email: email,
		password: password,
		password_confirmation: passwordConfirmation
	})

	try {
		const res = await axios.post({
			url: 'users',
			data: body
		})

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(response.headers)


		const json = await res.json();

		const { status, data, errors } = json;


		if (status === 'error') {

			dispatch({
				type: USER_SIGN_UP_FAILURE,
				payload: errors.full_messages
			})

		} else {

			dispatch({
				type: USER_SIGN_UP_SUCCESS,
				payload: data
			})

		}

		// history.push('/dashboard')

	} catch(error) {

		console.log(error)

	}
}

export const userSignIn = (email, password, history) => async dispatch => {

	dispatch({
		type: USER_SIGN_IN_REQUEST
	})

	let body = JSON.stringify({
		email: email,
		password: password
	})

	try {

		const res = await fetch('/users/sign_in', {
			method: 'POST',
			body: body,
			headers: headers
		})

		const json = await res.json()
		const { success, data, errors } = json;


		if (data) {

			dispatch({
				type: USER_SIGN_IN_SUCCESS,
				payload: data
			})

		} else {

			dispatch({
				type: USER_SIGN_IN_FAILURE,
				payload: errors
			})

		}


		//history.push('/dashboard')

	} catch(error) {
		console.log(error)
	}
}

export const userSignOut = (email, history) => async dispatch => {
	
	dispatch({
		type: USER_SIGN_OUT_REQUEST
	})

	try {

		const res = await fetch('/users/sign_out',{
			method: 'DELETE',
			body: JSON.stringify({
				email: email
			}),
			headers: headers
		})

		const json = await res.json()




		dispatch({
			type: USER_SIGN_OUT_SUCCESS,
			payload: json
		})

		//history.push('/')


	} catch(error) {
		console.log(error)
	}
}












