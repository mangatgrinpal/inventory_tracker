import {
	FETCH_RECORDS_SUCCESS,
	FETCH_RECORDS_ERROR
} from './types';

export const fetchRecords = item => async dispatch => {

	try {
		const res = await fetch('/records')
		const json = await res.json();

		dispatch({
			type: FETCH_RECORDS_SUCCESS,
			payload: json.data
		})

	} catch(error) {

		console.log(error)

	}

}