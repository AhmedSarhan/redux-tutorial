import React from 'react';
import ProductsList from './../components/Products/ProductsList';
import { useSelector } from 'react-redux';
const Cart = () => {
	const { cart, cartTotal } = useSelector((state) => state.menu);

	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Cart
			</h1>
			<h4
				style={{
					textAlign: 'center',
					fontSize: '25px',
					color: '#60a5fa',
					margin: 0,
				}}
			>
				{' '}
				total: {cartTotal}
			</h4>
			<ProductsList products={cart} />
		</div>
	);
};

export default Cart;
