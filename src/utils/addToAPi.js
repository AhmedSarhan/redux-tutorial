import Axios from '../api/axios';

export const addRecipeToApi = async (recipe) => {
	const response = await Axios.post('/recipes.json', recipe);

	console.log('response', response.data);
};
