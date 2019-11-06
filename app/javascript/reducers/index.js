import { combineReducers } from 'redux';
import restaurants from './restaurants';
import items from './items';

export default combineReducers({
	restaurants,
	items
});