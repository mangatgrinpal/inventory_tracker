import {
	FETCH_RESTAURANTS_REQUEST,
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_ERROR,
	ADD_RESTAURANT_REQUEST,
	ADD_RESTAURANT_SUCCESS,
	DELETE_RESTAURANT,
	SET_RESTAURANT_LINKS_VISIBILITY,
	SET_RESTAURANT_FORM_VISIBILITY
} from './types';

import axios from 'axios';

import {
	setAuthHeaders,
	persistAuthHeadersInDeviceStorage
} from '../utils/auth';



export const fetchRestaurants = restaurant => async dispatch => {

	dispatch({
		type: FETCH_RESTAURANTS_REQUEST
	})

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	
	try {

		const res = await axios.get('/restaurants', { headers: 
			currentUserCredentials
		});

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

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

	dispatch({
		type: ADD_RESTAURANT_REQUEST
	})
	

	try {
		
		const res = await axios.post('/restaurants', 
			restaurant
		)

		const { data } = res;


		dispatch({
			type: ADD_RESTAURANT_SUCCESS,
			payload: data,
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

		const res = await axios.delete('/restaurants/' + restaurant)

		const { data } = res;

		dispatch({
			type: DELETE_RESTAURANT,
			payload: data
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

