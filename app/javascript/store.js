import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
	
};

function rootReducer(state, action) {
	console.log(action.type);
	switch (action.type) {
		default:
			return state
	}
}

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(
		applyMiddleware(thunk))
	);


export default store