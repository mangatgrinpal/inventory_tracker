import {
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_ERROR,
	ADD_ITEM,
	DELETE_ITEM
} from './types'


const csrfToken = document.getElementsByName('csrf-token')[0].content

const headers = {
	'X-CSRF-Token': csrfToken,
	'Content-Type': 'application/json'
}

export const fetchItems = restaurant => async dispatch => {
	try {
		const res = await fetch('/items?restaurant=' + restaurant)
		const json = await res.json();


		dispatch({
			type: FETCH_ITEMS_SUCCESS,
			payload: json.data
		})
	} catch(error) {
		console.log(error)
	}
}

export const addItem = (name, units, restaurant) => async dispatch => {
	
	try {
		const res = await fetch('/items', {
			method: 'POST',
			body: JSON.stringify({
				item:{name: name, units: units, restaurant_id: restaurant},
				restaurant: restaurant
			}),
			headers: headers
		})

		const json = await res.json();

		dispatch({
			type: ADD_ITEM,
			payload: json.data
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
			payload: json.data
		})

	} catch(error) {
		console.log(error)
	}
}