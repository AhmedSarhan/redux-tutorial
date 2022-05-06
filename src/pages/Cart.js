import React from 'react';
import products from '../data.json';
import ProductsList from './../components/Products/ProductsList';
const Cart = () => {
	const cartProds = [products[0], products[2]];
	const total = cartProds.reduce((a, b) => a + b.price, 0);
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
				total: {total}
			</h4>
			<ProductsList products={cartProds} />
		</div>
	);
};

export default Cart;
