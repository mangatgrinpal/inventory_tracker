import { 
	FETCH_RESTAURANTS, 
	FETCH_RESTAURANTS_SUCCESS, 
	FETCH_RESTAURANTS_ERROR
} from '../actions/types';



const initialState = {
	restaurants: [],
	isLoading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_RESTAURANTS:
			return {
				...state,
				isLoading: true
			};
		case FETCH_RESTAURANTS_SUCCESS:
			return {
				...state,
				
			}
	}
}