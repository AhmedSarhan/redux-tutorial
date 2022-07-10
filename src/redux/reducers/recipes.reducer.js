import { RECIPES_ACTION_TYPES } from '../actions/recipes.actions';

const INITIAL_STATE = {
	wishlist: [],
	recipes: [],
};

const recipesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RECIPES_ACTION_TYPES.GET_RECIPES: {
			return {
				...state,
				recipes: [...action.payload],
			};
		}
		// 🚀 Create a new case for the action
		// ⚠️ Don't forget the action types
		// ❗ Never forget Redux is immutable - Don't mutate the state
		// ⚠️ what's the scope of your new case?
		// 🛩️ write your logic within the scope of your case

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
