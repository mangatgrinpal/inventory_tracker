import { combineReducers } from 'redux';

import restaurants from './restaurants';
import items from './items';
import weeks from './weeks';
import records from './records';
import users from './users';
import categories from './categories';


export default combineReducers({
	weeks,
	restaurants,
	items,
	records,
	users,
	categories
});