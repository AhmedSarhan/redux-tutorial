import { createStore } from 'redux';
import rootReducer from './reducers';
import recipesReducer from './reducers/recipes.reducer';

export const store = createStore(
	rootReducer,
	// recipesReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
