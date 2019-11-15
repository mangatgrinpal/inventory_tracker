import { combineReducers } from 'redux';
import restaurants from './restaurants';
import items from './items';
import weeks from './weeks';
import records from './records';


export default combineReducers({
	weeks,
	restaurants,
	items,
	records
});