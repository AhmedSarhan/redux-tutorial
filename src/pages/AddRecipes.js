import React from 'react';
import data from '../data.json';
import { addRecipeToApi } from './../utils/addToAPi';
const AddRecipes = () => {
	const addRecipes = () => {
		data.recipes.forEach((recipe) => {
			addRecipeToApi(recipe);
		});
	};
	return (
		<div>
			<button onClick={addRecipes}>Add Recipes</button>
		</div>
	);
};

export default AddRecipes;
