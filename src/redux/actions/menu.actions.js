export const CART_ACTION_TYPES = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	// ⚠️ add the new action types here
	INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
	DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
};

export const addToCartAction = (product) => {
	return {
		type: CART_ACTION_TYPES.ADD_TO_CART,
		payload: product,
	};
};

export const removeFromCartAction = (productName) => {
	return {
		type: CART_ACTION_TYPES.REMOVE_FROM_CART,
		payload: productName,
	};
};

// 🚀 Create two actions for increment and decrement respectively
// ❗  Don't forget to use action types
// ⚠️ Do these actions need a payload? what is it?
// 🛩️ On to the reducer
export const incrementQuantityAction = (productName) => {
	return {
		type: CART_ACTION_TYPES.INCREMENT_QUANTITY,
		payload: productName,
	};
};
export const decrementQuantityAction = (productName) => {
	return {
		type: CART_ACTION_TYPES.DECREMENT_QUANTITY,
		payload: productName,
	};
};
