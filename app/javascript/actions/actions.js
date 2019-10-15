import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_ERROR
} from './types'

export const fetchRestaurants = () => async dispatch => {
	const apiURL = "/restaurants"

	// we'll add a dispatch here to start spinner


	try {
		const res = await fetch(apiURL);
		const data = await res.json();

		dispatch({
			type: FETCH_RESTAURANTS,
			payload: data
		})
		console.log(data);
		dispatch(fetchRestaurants(data))

	} catch (error) {
		console.log(error);
	}

}

