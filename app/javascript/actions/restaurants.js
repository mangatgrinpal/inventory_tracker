import {
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_ERROR,
	ADD_RESTAURANT,
	DELETE_RESTAURANT,
	TOGGLE_RESTAURANT_FORM
} from './types'


const csrfToken = document.getElementsByName('csrf-token')[0].content

const headers = {
	'X-CSRF-Token': csrfToken,
	'Content-Type': 'application/json'
}

export const fetchRestaurants = restaurant => async dispatch => {

	try {

		const res = await fetch('/restaurants');
		const json = await res.json();

		dispatch({
			type: FETCH_RESTAURANTS_SUCCESS,
			payload: json
		})
		
	} catch (error) {

		console.log(error);
	}

}


export const addRestaurant = (restaurant, isHidden, toggleIsHidden) => async dispatch => {

	try {
		
		const res = await fetch('/restaurants', {
			method: 'POST',
			body: restaurant,
			//removed headers to get active storage attachments to work
			headers: { 'X-CSRF-Token': csrfToken }
		})

		const json = await res.json()


		dispatch({
			type: ADD_RESTAURANT,
			payload: json
		})

		toggleIsHidden(!isHidden)

	} catch (error) {

		console.log(error);
	}
}

export const deleteRestaurant = (restaurant, history) => async dispatch => {

	try {

		const res = await fetch('/restaurants/' + restaurant, {
			method: 'DELETE',
			headers: headers
		})

		const json = await res.json()

		dispatch({
			type: DELETE_RESTAURANT,
			payload: json
		})
		
		history.push('/dashboard')

	} catch (error) {

		console.log(error);
	}

}

export const toggleRestaurantForm = () => dispatch => {
	dispatch({
		type: TOGGLE_RESTAURANT_FORM
	})
}