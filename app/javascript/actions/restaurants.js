import {
	FETCH_RESTAURANTS_REQUEST,
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_ERROR,
	ADD_RESTAURANT,
	DELETE_RESTAURANT,
	SET_RESTAURANT_LINKS_VISIBILITY,
	SET_RESTAURANT_FORM_VISIBILITY
	
} from './types';

import axios from 'axios';



export const fetchRestaurants = restaurant => async dispatch => {

	dispatch({
		type: FETCH_RESTAURANTS_REQUEST
	})

	const userSignOutCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	
	try {

		const res = await axios.get('/restaurants', { headers: 
			userSignOutCredentials
		});


		const { data } = res;

		dispatch({
			type: FETCH_RESTAURANTS_SUCCESS,
			payload: data
		})
		
	} catch (error) {

		console.log(error);
		dispatch({
			type: FETCH_RESTAURANTS_ERROR
		})
	}

}


export const addRestaurant = restaurant => async dispatch => {

	try {
		
		const res = await fetch('/restaurants', {
			method: 'POST',
			body: restaurant,
			//removed content-type headers to get active storage attachments to work
			headers: { 'X-CSRF-Token': csrfToken }
		})

		const json = await res.json()


		dispatch({
			type: ADD_RESTAURANT,
			payload: json,
		})

		dispatch({
			type: SET_RESTAURANT_FORM_VISIBILITY,
			payload: false
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

		dispatch({
			type: DELETE_RESTAURANT,
			payload: json
		})

		dispatch({
			type: SET_RESTAURANT_LINKS_VISIBILITY,
			payload: true
		})
		
		history.push('/dashboard')

	} catch (error) {

		console.log(error)
	}

}

export const setRestaurantLinksVisibility = visibility => dispatch => {
	dispatch({
		type: SET_RESTAURANT_LINKS_VISIBILITY,
		payload: visibility
	})
}

export const setRestaurantFormVisibility = visibility => dispatch => {
	dispatch({
		type: SET_RESTAURANT_FORM_VISIBILITY,
		payload: visibility
	})
}

