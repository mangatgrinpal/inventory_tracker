import {
	FETCH_RESTAURANTS_REQUEST,
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_ERROR,
	ADD_RESTAURANT
} from './types'


export const addRestaurant = name => async dispatch => {
	


	try {

		const csrfToken = document.getElementsByName('csrf-token')[0].content

		const res = await fetch('/restaurants', {
			method: 'POST',
			body: JSON.stringify({restaurant: {name: name}}),
			headers: {
				'X-CSRF-Token': csrfToken,
				'Content-Type': 'application/json'
			}
		})

		const data = await res.json()

		dispatch({
			type: ADD_RESTAURANT,
			payload: data
		})

	} catch (error) {

		console.log(error);
	}
}



export const fetchRestaurants = restaurant => async dispatch => {

	// we'll add a dispatch here to start spinner
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

