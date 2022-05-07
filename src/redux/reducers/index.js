import { CART_ACTION_TYPES } from '../actions/cartActions';
import products from '../../data.json';

const INTIAL_STATE = {
	cart: [],
	cartTotal: 0,
	products,
};

const rootReducer = (state = INTIAL_STATE, action) => {
	const { type, payload } = action;
	if (type === CART_ACTION_TYPES.ADD_TO_CART) {
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
	if (type === CART_ACTION_TYPES.REMOVE_FROM_CART) {
		return {
			...state,
		};
	}
	return {
		...state,
	};
};

export default rootReducer;
