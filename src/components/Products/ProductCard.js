import React from 'react';
import styles from './products.module.scss';
import { BsCartPlus, BsCartXFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
	addToCartAction,
	removeFromCartAction,
	incrementQuantityAction,
	decrementQuantityAction,
} from '../../redux/actions/menu.actions';
const ProductCard = ({ product }) => {
	const { pathname } = useLocation();
	const isInCart = pathname.includes('cart');
	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(addToCartAction(product));
	};
	const removeFromCart = () => {
		dispatch(removeFromCartAction(product.name));
	};

	// 🚀 create two functions for the Increment and Decrement
	// 🚀 dispatch the actions of the two functions
	// ⚠️ don't forget to import the actions
	const incrementQuantity = () => {
		dispatch(incrementQuantityAction(product.name));
	};
	const decrementQuantity = () => {
		dispatch(decrementQuantityAction(product.name));
	};
	return (
		<div className={styles['product-card']}>
			{isInCart && (
				<button className={styles['del-product']} onClick={removeFromCart}>
					<BsCartXFill />
				</button>
			)}
			<img src={product.image} alt={product.name} />
			<div className={styles['product-details']}>
				<h3>
					{product.name}
					{isInCart && <span> x ({product.quantity})</span>}
				</h3>
				<h5>{product.ingredients}</h5>
				<div className={styles['product-footer']}>
					{/* 🚀 add the increment and decrement functions to the buttons on click  */}
					{isInCart ? (
						<>
							<button onClick={incrementQuantity}>
								<AiOutlinePlus />
							</button>
							<h3>{product.price}EGP</h3>
							{/* ❗ disable the minus button when quantity is 1 */}
							<button
								onClick={decrementQuantity}
								disabled={product.quantity <= 1}
							>
								<AiOutlineMinus />
							</button>
						</>
					) : (
						<>
							<h3>{product.price}EGP</h3>
							<button onClick={addToCart}>
								<BsCartPlus />
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
