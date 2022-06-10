import React from 'react';

import RecipeCard from './RecipeCard';
import styles from './recipes.module.scss';
const RecipeList = ({ recipes }) => {
	return (
		<div className={styles['recipes-container']}>
			{recipes?.length > 0 &&
				recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
		</div>
	);
};

export default RecipeList;
