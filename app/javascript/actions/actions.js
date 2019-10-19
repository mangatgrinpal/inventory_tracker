import {
	FETCH_RESTAURANTS_REQUEST,
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_ERROR
} from './types'





export const fetchRestaurants = restaurant => async dispatch => {
	const apiURL = "/restaurants"

	// we'll add a dispatch here to start spinner


	try {
		const res = await fetch(apiURL);
		const data = await res.json();

		dispatch({
			type: FETCH_RESTAURANTS_SUCCESS,
			payload: data
		})
		console.log(data);


	} catch (error) {

		dipatch({
			type: FETCH_RESTAURANTS_ERROR
		})
		console.log(error);
	}

}

