import { 
	FETCH_RESTAURANTS_REQUEST, 
	FETCH_RESTAURANTS_SUCCESS, 
	FETCH_RESTAURANTS_ERROR
} from '../actions/types';


const initialState = {
	restaurants: [],
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
				restaurants: action.restaurants
			}
		default:
			return state
	}
}
