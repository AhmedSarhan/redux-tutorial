export const RECIPES_ACTION_TYPES = {
	ADD_TO_WISH_LIST: 'ADD_TO_WISH_LIST',
	REMOVE_FROM_WISH_LIST: 'REMOVE_FROM_WISH_LIST',
	GET_RECIPES: 'GET_RECIPES',
};

export const fillRecipes = (recipes) => {
	return {
		type: RECIPES_ACTION_TYPES.GET_RECIPES,
		payload: recipes,
	};
};
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
