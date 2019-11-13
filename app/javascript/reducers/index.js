import { combineReducers } from 'redux';
import restaurants from './restaurants';
import items from './items';
import records from './records';

export default combineReducers({
	restaurants,
	items
});