import {
	SET_CURRENT_WORK_DAY
} from './types';

export const setCurrentWorkDay = day => dispatch => {

	dispatch({
		type: SET_CURRENT_WORK_DAY,
		payload: day
	})
	
}
