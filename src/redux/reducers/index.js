import { CART_ACTION_TYPES } from '../actions/cartActions';
import products from '../../data.json';

const INTIAL_STATE = {
	cart: [],
	cartTotal: 0,
	products,
};

const rootReducer = (state = INTIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case CART_ACTION_TYPES.ADD_TO_CART: {
			let newCart = [...state.cart];
			const PRODUCT_INDEX = newCart.findIndex(
				(product) => product.name === payload.name
			);
			if (PRODUCT_INDEX <= -1) {
				newCart = newCart.concat({ ...payload, quantity: 1 });
			} else {
				newCart = newCart.map((product) => {
					if (product.name === payload.name) {
						return { ...product, quantity: product.quantity + 1 };
					} else {
						return product;
					}
				});
			}

			return {
				...state,
				cart: newCart,
				cartTotal: state.cartTotal + payload.price,
			};
		}
		case CART_ACTION_TYPES.REMOVE_FROM_CART: {
			// payload === productName (unique key for products)
			// search and delete the product with name === payload (productName)
			// cartTotal should reflect this

			let newCart = [...state.cart];
			newCart = newCart.filter((product) => product.name !== payload);
			let newCartTotal = newCart.reduce((a, b) => a + b.price * b.quantity, 0);

			return {
				...state,
				cart: newCart,
				cartTotal: newCartTotal,
			};
		}

		// 🚀 Create two new cases one for each actions
		// ⚠️ Don't forget the action types
		// ❗ Never forget Redux is immutable - Don't mutate the state
		// ⚠️ what's the scope of your cases?
		// 🛩️ write your logic within the scope of your cases

		default:
			return state;
	}
};

export default rootReducer;
