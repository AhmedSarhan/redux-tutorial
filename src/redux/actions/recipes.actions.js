export const RECIPES_ACTION_TYPES = {
	ADD_TO_WISH_LIST: 'ADD_TO_WISH_LIST',
	REMOVE_FROM_WISH_LIST: 'REMOVE_FROM_WISH_LIST',
	GET_RECIPES: 'GET_RECIPES',
	// ⚠️ add new type for getWishList
	// ❗ follow the same naming convention for consistency
};

export const getRecipesAction = (recipes) => {
	return {
		type: RECIPES_ACTION_TYPES.GET_RECIPES,
		payload: recipes,
	};
};

// 🚀 Create an action named getWishListAction
// ❗  Don't forget to use action types
// ⚠️ Do this action need a payload? what is it?
// 🛩️ On to the reducer
// 🚀 dispatch it in the component

export const addToWishListAction = (recipe) => {
	return {
		type: RECIPES_ACTION_TYPES.ADD_TO_WISH_LIST,
		payload: recipe,
	};
};

export const removeFromWishListAction = (recipeId) => {
	return {
		type: RECIPES_ACTION_TYPES.REMOVE_FROM_WISH_LIST,
		payload: recipeId,
	};
};
