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

export const userSignUp = (email, password, passwordConfirmation) => async dispatch => {
	try {
		const res = await fetch('/users', {
			method: 'POST',
			body: JSON.stringify({
				user: {
					email: email,
					password: password,
					password_confirmation: passwordConfirmation
				}
			}),
			headers: headers
		})

		const json = await res.json();

		
	} catch(error) {

		console.log(error)
	}
}

export const userSignIn = (email, password) => async dispatch => {
	try {
		const res = await fetch('/users/sign_in', {
			method: 'POST',
			body: JSON.stringify({
				user: {
					email: email,
					password: password
				}
			})
		}),
		headers: headers
	} catch(error) {
		console.log(error)
	}
}

export const userSignOut = email => async dispatch => {
	try {
		const res = await fetch('/users/sign_out',{
			method: 'DELETE',
			body: JSON.stringify({
				user: {
					email: email
				}
			})
		})
	} catch(error) {
		console.log(error)
	}
}












