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
	persistAuthHeadersInDeviceStorage,
	deleteAuthHeaders,
	deleteAuthHeadersFromDeviceStorage 
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


		dispatch({
			type: USER_SIGN_UP_SUCCESS,
			payload: data
		})



		history.push('/dashboard')

	} catch(error) {

		dispatch({
			type: USER_SIGN_UP_FAILURE,
			payload: error.response
		})


	}
}

export const verifyToken = verificationParams => async dispatch => {

	try {
		const res = await axios.get('/users/validate_token',{
			params: verificationParams
		})

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

	} catch (error) {
		console.log(error)
	}
}

export const userSignIn = (email, password, history) => async dispatch => {

	dispatch({
		type: USER_SIGN_IN_REQUEST
	})


	try {

		const res = await axios.post('/users/sign_in', {
			email: email,
			password: password
		})

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

		const { data } = res.data;
		
		dispatch({
			type: USER_SIGN_IN_SUCCESS,
			payload: data
		})


		history.push('/dashboard')

	} catch(error) {
		
		let message;

		const { response: { status }} = error;

		if (status === 401) {
			message = 'Invalid credentials, please try again.'
		}

		if (status === 500) {
			message = 'Uh oh, something went wrong. Please try again.'
		}

		dispatch({
			type: USER_SIGN_IN_FAILURE,
			payload: message
		})
	}
}

export const userSignOut = history => async dispatch => {
	
	const userSignOutCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	dispatch({
		type: USER_SIGN_OUT_REQUEST
	})

	try {

		const res = await axios.delete('/users/sign_out', {
			data: userSignOutCredentials
		})

		deleteAuthHeaders()
		deleteAuthHeadersFromDeviceStorage()

		dispatch({
			type: USER_SIGN_OUT_SUCCESS
		})



		history.push('/')

		localStorage.removeItem('persist:root')

	} catch(error) {
		console.log(error)
	}
}

export const verifyCredentials = () => async dispatch => {


	if (await localStorage.getItem('access-token')) {
		const verificationParams = {
			'access-token': await localStorage.getItem('access-token'),
			'client': await localStorage.getItem('client'),
			'uid': await localStorage.getItem('uid')
		}
		debugger
		verifyToken(verificationParams)
	} else {
		// do something
	}



}


