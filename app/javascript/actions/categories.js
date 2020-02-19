import { 
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_FAILURE
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