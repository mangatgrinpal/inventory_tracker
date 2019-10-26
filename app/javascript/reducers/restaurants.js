import { 
	FETCH_RESTAURANTS_REQUEST, 
	FETCH_RESTAURANTS_SUCCESS, 
	FETCH_RESTAURANTS_ERROR,
	ADD_RESTAURANT
} from '../actions/types';


const initialState = {
	restaurantList: [],
	isFetching: false
};

export default function(state = initialState, action) {

	switch (action.type) {
		case FETCH_RESTAURANTS_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case FETCH_RESTAURANTS_SUCCESS:
			return {
				...state,
				restaurantList: action.restaurantList,
				isFetching: false
			}

		default:
			return state
	}
}
