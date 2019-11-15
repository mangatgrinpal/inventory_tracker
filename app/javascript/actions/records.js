import {
	FETCH_RECORDS_SUCCESS,
	FETCH_RECORDS_ERROR
} from './types';

export const fetchRecords = item => async dispatch => {

	try {
		const res = await fetch(`/records?itemId=${item}`)
		const json = await res.json();

	} catch(error) {

		console.log(error)
		
	}

}