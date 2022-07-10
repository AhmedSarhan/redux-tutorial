import { combineReducers } from 'redux';
import menuReducer from './menu.reducer';
import recipesReducer from './recipes.reducer';
import authReducer from './auth.reducer';

// state = {
// 	blog: {
// 		recipes: [],
// 		wishlist: [],
// 	},
// 	menu: {
// 		products: [],
// 		cart: [],
// 		cartTotal: 0,
// 	},
// auth: {
// 	token: string;
// 	user: {}
// }
// };
const rootReducer = combineReducers({
	blog: recipesReducer,
	menu: menuReducer,
	auth: authReducer,
});

export default rootReducer;
