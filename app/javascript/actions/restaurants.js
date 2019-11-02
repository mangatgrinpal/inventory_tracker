import {
	FETCH_RESTAURANTS_REQUEST,
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_ERROR,
	ADD_RESTAURANT,
	DELETE_RESTAURANT
} from './types'



const csrfToken = document.getElementsByName('csrf-token')[0].content

export const fetchRestaurants = restaurant => async dispatch => {

	dispatch({
		type: FETCH_RESTAURANTS_REQUEST,
		isFetching: true
	})

	try {
		const res = await fetch('/restaurants');
		const data = await res.json();

		const payload = data.data


		dispatch({

			type: FETCH_RESTAURANTS_SUCCESS,
			restaurantList: payload

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
			headers: {
				'X-CSRF-Token': csrfToken,
				'Content-Type': 'application/json'
			}
		})

		const data = await res.json()
		const payload = data.data

		dispatch({
			type: ADD_RESTAURANT,
			restaurantList: payload
		})

	} catch (error) {

		console.log(error);
	}
}

export const deleteRestaurant = restaurant => async dispatch => {

	try {

		const res = await fetch('/restaurants/' + restaurant, {
			method: 'DELETE',
			headers: {
				'X-CSRF-Token': csrfToken,
				'Content-Type': 'application/json'
			}
		})

		const data = await res.json()
		const payload = data.data

		dispatch({
			type: DELETE_RESTAURANT,
			restaurantList: payload
		})


	} catch (error) {

		console.log(error);

	}

}