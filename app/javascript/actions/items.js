import {
	FETCH_ITEMS_REQUEST,
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_ERROR,
	CLEAR_FETCHED_ITEMS,
	ADD_ITEM,
	DELETE_ITEM,
	SET_ITEM_FORM_VISIBILITY,
	FETCH_RECORDS_SUCCESS,
	UPDATE_RECORD
} from './types'

import {
	setAuthHeaders,
	persistAuthHeadersInDeviceStorage
} from '../utils/auth';

import axios from 'axios';


export const fetchItems = restaurant => async dispatch => {
	
	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	try {

		dispatch({
			type: FETCH_ITEMS_REQUEST
		})

		const res = await axios.get(`/items?restaurant=${restaurant}`, { headers: 
			currentUserCredentials
		});

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

		const { data } = res;


		dispatch({
			type: FETCH_ITEMS_SUCCESS,
			payload: data
		})


	} catch(error) {
		console.log(error)
	}
}

export const addItem = (name, units, category, restaurant) => async dispatch => {
	
	try {

		const res = await axios.post('/items', {
			
				item: {
					name: name, 
					units: units, 
					restaurant_id: restaurant
				},
				category: { title: category },
				restaurant: restaurant
		})


		const { data } = res;

		dispatch({
			type: ADD_ITEM,
			payload: data
		})

		dispatch({
			type: SET_ITEM_FORM_VISIBILITY,
			payload: false
		})

	} catch(error) {
		console.log(error)
	}
}

export const deleteItem = (item, restaurant) => async dispatch => {

	try {
		const res = await axios.delete('/items/' + item, {
			
			data: { 
				restaurant: restaurant
			}
		})

		const { data } = res;

		dispatch({
			type: DELETE_ITEM,
			payload: data
		})

	} catch(error) {
		console.log(error)
	}
}

export const clearFetchedItems = () => {
	dispatch({
		type: CLEAR_FETCHED_ITEMS
	})
}

export const setItemFormVisibility = visibility => dispatch => {
	dispatch({
		type: SET_ITEM_FORM_VISIBILITY,
		payload: visibility
	})
		
}


export const updateRecord = (date, item, recordType, restaurant, updateType, quantity) => async dispatch => {


	try {
		const res = await axios.post('/records', {
			
			record: {
				item_id: item, 
				record_type: recordType, 
				date: date,
				quantity: quantity
			}, 
			restaurant: restaurant, 
			update_type: updateType,
		})

		const { data } = res;


		dispatch({
			type: UPDATE_RECORD,
			payload: data
		})
		
	} catch(error) {
		console.log(error)
	}
}
