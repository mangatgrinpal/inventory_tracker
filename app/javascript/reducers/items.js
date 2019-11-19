import {
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_ERROR,
	ADD_ITEM,
	DELETE_ITEM,
	FETCH_RECORDS_SUCCESS
} from '../actions/types'

const initialState = {
	itemList: [],
	isFetching: true
}

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case FETCH_ITEMS_SUCCESS:
			return {
				...state,
				itemList: payload,
				isFetching: false
			};
		case FETCH_ITEMS_ERROR:
			return {
				...state,
				itemList: payload,
				isFetching: false
			}
		case ADD_ITEM:
			return {
				...state,
				itemList: payload
			};
		case DELETE_ITEM:
			return {
				...state,
				itemList: payload
			};
		default:
			return state
	}
}