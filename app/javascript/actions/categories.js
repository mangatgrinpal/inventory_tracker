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




	try {
		dispatch({
			type: FETCH_CATEGORIES_REQUEST
		})

		const res = await axios.get('/categories?user_id=' + user)

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