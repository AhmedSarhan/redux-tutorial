import React from 'react';
import { useSelector } from 'react-redux';
import RecipeList from '../components/Recipes/RecipeList';

const Wishlist = () => {
	const wishlist = useSelector((state) => state.blog.wishlist);

	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Our Wishlist
			</h1>
			<RecipeList recipes={wishlist} />
		</div>
	);
};

export default Wishlist;
