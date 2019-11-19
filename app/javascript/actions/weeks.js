import {
	SET_CURRENT_WEEK_RANGE
} from './types';

export const setCurrentWeekRange = week => dispatch => {

	dispatch({
		type: SET_CURRENT_WEEK_RANGE,
		payload: week
	})
	
}
