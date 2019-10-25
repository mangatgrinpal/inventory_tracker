import {
	FETCH_RESTAURANTS_REQUEST,
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_ERROR,
	ADD_RESTAURANT
} from './types'


export const addRestaurant = name => async dispatch => {
	
	try {

		dispatch({
			type: ADD_RESTAURANT,
			payload: name
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

		dispatch({
			type: FETCH_RESTAURANTS_SUCCESS,
			payload: data
		})
		


	} catch (error) {

		
		console.log(error);
	}

}

