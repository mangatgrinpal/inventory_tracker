import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth';
import restaurants from './restaurants';
import items from './items';
import weeks from './weeks';
import records from './records';
import users from './users';


export default combineReducers({
	weeks,
	restaurants,
	items,
	records,
	reduxTokenAuth: reduxTokenAuthReducer,
	users
});