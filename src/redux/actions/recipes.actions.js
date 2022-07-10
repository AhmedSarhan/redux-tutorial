export const RECIPES_ACTION_TYPES = {
	ADD_TO_WISH_LIST: 'ADD_TO_WISH_LIST',
	REMOVE_FROM_WISH_LIST: 'REMOVE_FROM_WISH_LIST',
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
