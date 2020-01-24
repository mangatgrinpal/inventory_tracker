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

import axios from 'axios';

import { 
	setAuthHeaders, 
	persistAuthHeadersInDeviceStorage 
} from '../utils/auth';



export const userSignUp = (email, password, passwordConfirmation, history) => async dispatch => {
	
	dispatch({
		type: USER_SIGN_UP_REQUEST
	})

	try {

		const res = await axios.post('/users', {
			email: email,
			password: password,
			password_confirmation: passwordConfirmation
		})

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

		const { data } = res.data;


		debugger

		dispatch({
			type: USER_SIGN_UP_SUCCESS,
			payload: data
		})



		// history.push('/dashboard')

	} catch (err) {
		console.error(err)
		debugger
		dispatch({
			type: USER_SIGN_UP_FAILURE
		})


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












