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


const csrfToken = document.getElementsByName('csrf-token')[0].content

const headers = {
	'X-CSRF-Token': csrfToken,
	'Content-Type': 'application/json'
}

export const fetchItems = restaurant => async dispatch => {
	try {

		dispatch({
			type: FETCH_ITEMS_REQUEST
		})

		const res = await fetch('/items?restaurant=' + restaurant)
		const json = await res.json();


		dispatch({
			type: FETCH_ITEMS_SUCCESS,
			payload: json
		})


	} catch(error) {
		console.log(error)
	}
}

export const addItem = (name, units, category, restaurant) => async dispatch => {
	
	try {
		const res = await fetch('/items', {
			method: 'POST',
			body: JSON.stringify({
				item: {
					name: name, 
					units: units, 
					restaurant_id: restaurant, 
					category: category
				},
				restaurant: restaurant
			}),
			headers: headers
		})

		const json = await res.json();

		dispatch({
			type: ADD_ITEM,
			payload: json
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
		const res = await fetch('/items/' + item, {
			method: 'DELETE',
			body: JSON.stringify({restaurant: restaurant}),
			headers: headers
		})

		const json = await res.json();

		dispatch({
			type: DELETE_ITEM,
			payload: json
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
		const res = await fetch('/records', {
			method: 'POST',
			body: JSON.stringify({
				record: {
					item_id: item, 
					record_type: recordType, 
					date: date,
					quantity: quantity
				}, 
				restaurant: restaurant, 
				update_type: updateType
			}),
			headers: headers
		})

		const json = await res.json();


		dispatch({
			type: UPDATE_RECORD,
			payload: json
		})
		
	} catch(error) {
		console.log(error)
	}
}
