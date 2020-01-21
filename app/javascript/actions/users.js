import {
	USER_SIGN_UP,
	USER_SIGN_IN,
	USER_SIGN_OUT
} from './types'

//consolidate these csrftokens into a single file later

const csrfToken = document.getElementsByName('csrf-token')[0].content

const headers = {
	'X-CSRF-Token': csrfToken,
	'Content-Type': 'application/json'
}

export const userSignUp = (email, password, passwordConfirmation, history) => async dispatch => {
	
	let body = JSON.stringify({
		email: email,
		password: password,
		password_confirmation: passwordConfirmation
	})

	try {
		const res = await fetch('/users', {
			method: 'POST',
			body: body,
			headers: headers
		})

		const json = await res.json();
		const { data } = json


		dispatch({
			type: USER_SIGN_UP,
			payload: data
		})		

		// history.push('/dashboard')

	} catch(error) {

		console.log(error)
	}
}

export const userSignIn = (email, password, history) => async dispatch => {

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
		const { data }  = json;

		dispatch({
			type: USER_SIGN_IN,
			payload: data
		})


		//history.push('/dashboard')

	} catch(error) {
		console.log(error)
	}
}

export const userSignOut = (email, history) => async dispatch => {
	
	try {

		const res = await fetch('/users/sign_out',{
			method: 'DELETE',
			body: JSON.stringify({
				user: {
					email: email
				}
			}),
			headers: headers
		})

		const json = await res.json()



		dispatch({
			type: USER_SIGN_OUT,
			payload: json
		})

		//history.push('/')


	} catch(error) {
		console.log(error)
	}
}












