import {
	SET_CURRENT_WEEK_START,
	SET_CURRENT_WEEK_END
} from './types';

export const setCurrentWeekRange = (start, end) => dispatch => {

	dispatch({
		type: SET_CURRENT_WEEK_START,
		payload: start
	})

	dispatch({
		type: SET_CURRENT_WEEK_END,
		payload: end
	})
}
