import {
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_ERROR,
	ADD_RESTAURANT,
	DELETE_RESTAURANT
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

		const payload = json.data

		dispatch({
			type: FETCH_RESTAURANTS_SUCCESS,
			payload: payload
		})
		
	} catch (error) {

		console.log(error);
	}

}


export const addRestaurant = name => async dispatch => {


	try {		

		const res = await fetch('/restaurants', {
			method: 'POST',
			body: JSON.stringify({restaurant: {name: name}}),
			headers: headers
		})

		const json = await res.json()
		const payload = json.data

		dispatch({
			type: ADD_RESTAURANT,
			payload: payload
		})

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
		const payload = json.data

		dispatch({
			type: DELETE_RESTAURANT,
			payload: payload
		})
		
		history.push('/dashboard')

	} catch (error) {

		console.log(error);
	}

}