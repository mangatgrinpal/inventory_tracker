import {
	SET_CURRENT_WORK_DAY,
	SET_PREVIOUS_WORK_DAY
} from './types';

export const setCurrentWorkDay = day => dispatch => {

	dispatch({
		type: SET_CURRENT_WORK_DAY,
		payload: day
	})
	
}

export const setPreviousWorkDay = day => dispatch => {

	dispatch({
		type: SET_PREVIOUS_WORK_DAY,
		payload: day
	})
}