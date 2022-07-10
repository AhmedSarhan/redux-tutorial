import React from 'react';
import { useSelector } from 'react-redux';

import ProductsList from '../components/Products/ProductsList';

const Menu = () => {
	const products = useSelector((state) => state.menu.products);

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
