import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipeList from '../components/Recipes/RecipeList';
// import { getWishListService } from '../redux/services/recipes.services';

const Wishlist = () => {
	const wishlist = useSelector((state) => state.blog.wishlist);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getWishListService());
	// }, [dispatch]);
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
