import React from 'react';
import RecipeList from './../components/Recipes/RecipeList';
import { useSelector } from 'react-redux';

const RecipesPage = () => {
	const recipes = useSelector((state) => state.blog.recipes);
	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Our Blog
			</h1>
			<RecipeList recipes={recipes} />
		</div>
	);
};

export default RecipesPage;
