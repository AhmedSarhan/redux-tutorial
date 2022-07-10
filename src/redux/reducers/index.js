import { combineReducers } from 'redux';
import menuReducer from './menu.reducer';
import recipesReducer from './recipes.reducer';

// state = {
// 	recipesReducer: {
// 		recipes: [],
// 		wishlist: [],
// 	},
// 	menuReducer: {
// 		products: [],
// 		cart: [],
// 		cartTotal: 0,
// 	},

// };
const rootReducer = combineReducers({
	blog: recipesReducer,
	menu: menuReducer,
});

export default rootReducer;
