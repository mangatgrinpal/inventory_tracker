import {
	FETCH_ITEMS_REQUEST,
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_ERROR,
	CLEAR_FETCHED_ITEMS,
	ADD_ITEM,
	DELETE_ITEM,
	FETCH_RECORDS_SUCCESS,
	INCREMENT_RECORD,
	DECREMENT_RECORD
} from '../actions/types'

const initialState = {
	itemList: [],
	isFetching: true
}

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case FETCH_ITEMS_REQUEST:
			return {
				...state,
				isFetching: true
			}
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
		case CLEAR_FETCHED_ITEMS:
			return {
				...state,
				itemList: []
			}
		case INCREMENT_RECORD:
			return {
				...state,
				itemList: payload
			}
		case DECREMENT_RECORD:
			return {
				...state,
				itemList: payload
			}
		default:
			return state
	}
}