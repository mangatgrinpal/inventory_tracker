import { 
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_FAILURE,
	FETCH_TRACKABLE_ATTRIBUTES_REQUEST,
	FETCH_TRACKABLE_ATTRIBUTES_SUCCESS,
	FETCH_TRACKABLE_ATTRIBUTES_FAILURE,
	DELETE_CATEGORY_SUCCESS
} from './types';

import {
	setAuthHeaders,
	persistAuthHeadersInDeviceStorage
} from '../utils/auth';

import axios from 'axios';

export const fetchCategories = user => async dispatch => {

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}


	try {
		dispatch({
			type: FETCH_CATEGORIES_REQUEST
		})

		const res = await axios.get('/categories', { headers:
			currentUserCredentials
		});
		

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

		const { data } = res;

		dispatch({
			type: FETCH_CATEGORIES_SUCCESS,
			payload: data
		})

	} catch(error) {
		console.log(error)
	}
}

export const deleteCategory = category => async dispatch => {

	try {
		const res = await axios.delete(`/categories/#${category}`)

		const { data } = res;

		dispatch({
			type: DELETE_CATEGORY_SUCCESS,
			payload: data
		})
	} catch(error) {
		console.log(error)
	}
}

export const fetchTrackableAttributes = () => async dispatch => {
	
	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}


	try {
		dispatch({
			type: FETCH_TRACKABLE_ATTRIBUTES_REQUEST
		})

		const res = await axios.get('/trackable_attributes', { headers:
			currentUserCredentials
		});

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

		const { data } = res;

		dispatch({
			type: FETCH_TRACKABLE_ATTRIBUTES_SUCCESS,
			payload: data
		})
		
	} catch(error) {
		console.log(error)
	}
}