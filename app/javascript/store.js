import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';


const initialState = {
};

const persistConfig = {
	key: 'root',
	whitelist: ['users'],
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = createStore(
	rootReducer,
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