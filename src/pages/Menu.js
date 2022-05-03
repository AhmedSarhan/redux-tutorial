import React from 'react';
import products from '../data.json';
import ProductsList from '../components/Products/ProductsList';
const Menu = () => {
	console.log('prod', products);
	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Our Menu
			</h1>
			<ProductsList products={products} />
		</div>
	);
};

export default Menu;
