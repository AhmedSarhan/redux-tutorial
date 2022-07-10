import { CART_ACTION_TYPES } from '../actions/menu.actions';
import data from '../../data.json';

const INTIAL_STATE = {
	cart: [],
	cartTotal: 0,
	products: data.menu,
};
const getCartTotal = (newCart) => {
	return newCart.reduce((a, b) => a + b.price * b.quantity, 0);
};
const menuReducer = (state = INTIAL_STATE, action) => {
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
				cartTotal: getCartTotal(newCart),
			};
		}
		case CART_ACTION_TYPES.REMOVE_FROM_CART: {
			// payload === productName (unique key for products)
			// search and delete the product with name === payload (productName)
			// cartTotal should reflect this

			let newCart = [...state.cart];
			newCart = newCart.filter((product) => product.name !== payload);

			return {
				...state,
				cart: newCart,
				cartTotal: getCartTotal(newCart),
			};
		}

		// 🚀 Create two new cases one for each actions
		// ⚠️ Don't forget the action types
		// ❗ Never forget Redux is immutable - Don't mutate the state
		// ⚠️ what's the scope of your cases?
		// 🛩️ write your logic within the scope of your cases
		case CART_ACTION_TYPES.INCREMENT_QUANTITY: {
			// payload === productName
			// loop in the cart array and increase the quantity of product with name === payload by 1
			// increase the carTotal by the same amount as the product price
			const newCart = [...state.cart].map((product) => {
				if (product.name === payload) {
					return { ...product, quantity: product.quantity + 1 };
				}
				return product;
			});
			let newCartTotal = newCart.reduce((a, b) => a + b.price * b.quantity, 0);
			return {
				...state,
				cart: newCart,
				cartTotal: getCartTotal(newCart),
			};
		}
		case CART_ACTION_TYPES.DECREMENT_QUANTITY: {
			// payload === productName
			// loop in the cart array and decrease the quantity of product with name === payload by 1
			// decrease the carTotal by the same amount as the product price
			const newCart = [...state.cart].map((product) => {
				if (product.name === payload) {
					return { ...product, quantity: product.quantity - 1 };
				}
				return product;
			});
			return {
				...state,
				cart: newCart,
				cartTotal: getCartTotal(newCart),
			};
		}
		default:
			return state;
	}
};

export default menuReducer;
