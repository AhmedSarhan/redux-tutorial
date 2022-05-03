import React from 'react';
import ProductCard from './ProductCard';
import styles from './products.module.scss';

const ProductsList = ({ products }) => {
	return (
		<div className={styles['products-container']}>
			{products.length > 0 &&
				products.map((product) => (
					<ProductCard key={product.name} product={product} />
				))}
		</div>
	);
};

export default ProductsList;
