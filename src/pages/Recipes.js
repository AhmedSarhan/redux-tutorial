import React from 'react';
import RecipeList from './../components/Recipes/RecipeList';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { fillRecipes } from '../redux/actions/recipes.actions';
import { useEffect } from 'react';

const RecipesPage = () => {
	const recipes = useSelector((state) => state.blog.recipes);
	const dispatch = useDispatch();

	// is not integrated inside redux global state
	// const fetchRecipes = async () => {
	// 	const response = await Axios.get('url/recipes');
	// 	dispatch(fillRecipes(response.data));
	// };
	// useEffect(() => {
	// 	fetchRecipes();
	// }, []);
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
