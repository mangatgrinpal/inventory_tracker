import { 
	FETCH_RESTAURANTS_SUCCESS, 
	FETCH_RESTAURANTS_ERROR,
	ADD_RESTAURANT,
	DELETE_RESTAURANT
} from '../actions/types';


const initialState = {
	restaurantList: [],
	isFetching: true
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case FETCH_RESTAURANTS_SUCCESS:
			return {
				...state,
				restaurantList: payload,
				isFetching: false
			};
		case FETCH_RESTAURANTS_ERROR:
			return {
				...state,
				restaurantList: payload,
				isFetching: false
			}
		case ADD_RESTAURANT:
			return {
				...state,
				restaurantList: payload
			};
		case DELETE_RESTAURANT:
			return {
				...state,
				restaurantList: payload
			};
		default:
			return state
	}
}
