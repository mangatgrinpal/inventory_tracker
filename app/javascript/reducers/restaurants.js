import { 
	FETCH_RESTAURANTS_REQUEST,
	FETCH_RESTAURANTS_SUCCESS, 
	FETCH_RESTAURANTS_ERROR,
	ADD_RESTAURANT,
	DELETE_RESTAURANT,
	SET_RESTAURANT_LINKS_VISIBILITY,
	SET_RESTAURANT_FORM_VISIBILITY
} from '../actions/types';


const initialState = {
	restaurantList: [],
	isFetching: true,
	restaurantFormVisible: false,
	restaurantLinksVisible: true
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case FETCH_RESTAURANTS_REQUEST:
			return {
				...state,
				isFetching: true
			}
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
		case SET_RESTAURANT_LINKS_VISIBILITY:
			return {
				...state,
				restaurantLinksVisible: payload
			}
		case SET_RESTAURANT_FORM_VISIBILITY:
			return {
				...state,
				restaurantFormVisible: payload
			};
		default:
			return state
	}
}
