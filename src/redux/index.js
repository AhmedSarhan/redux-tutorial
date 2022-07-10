import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
	rootReducer,
	// recipesReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
