import { 
	FETCH_RESTAURANTS_SUCCESS, 
	FETCH_RESTAURANTS_ERROR,
	ADD_RESTAURANT,
	DELETE_RESTAURANT,
	TOGGLE_RESTAURANT_FORM
} from '../actions/types';


const initialState = {
	restaurantList: [],
	isFetching: true,
	restaurantFormVisible: true
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
		case TOGGLE_RESTAURANT_FORM:
			return {
				...state,
				restaurantFormVisible: !state.restaurantFormVisible
			};
		default:
			return state
	}
}
