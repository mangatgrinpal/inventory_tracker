import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./reducers";



const initialState = {};

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['users']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = createStore(
	persistedReducer,
	initialState,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

let persistor = persistStore(store);


export { 
	store, 
	persistor 
}