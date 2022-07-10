import { RECIPES_ACTION_TYPES } from '../actions/recipes.actions';
import data from '../../data.json';

const INITIAL_STATE = {
	wishlist: [],
	recipes: data.recipes,
};

const recipesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RECIPES_ACTION_TYPES.ADD_TO_WISH_LIST: {
			return {
				...state,
				wishlist: state.wishlist.concat(action.payload),
			};
		}
		case RECIPES_ACTION_TYPES.REMOVE_FROM_WISH_LIST: {
			const newWishList = [...state.wishlist].filter(
				(recipe) => recipe.id !== action.payload
			);
			return {
				...state,
				wishlist: newWishList,
			};
		}
		default:
			return state;
	}
};

export default recipesReducer;
