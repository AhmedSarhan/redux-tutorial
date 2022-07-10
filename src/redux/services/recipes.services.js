import { getRecipesAction } from '../actions/recipes.actions';
import Axios from './../../api/axios';
const { v4: uuid } = require('uuid');

// generating random unique userId
const id = uuid();

console.log('userId', id);

// get the userId from the console
const USER_ID = '';

export const getRecipesService = () => async (dispatch) => {
	try {
		const { data } = await Axios.get('/recipes.json');
		const recipes = Object.entries(data).map(([id, recipe]) => {
			return { ...recipe, id };
		});
		console.log('recipes', recipes);

		dispatch(getRecipesAction(recipes));
	} catch (error) {
		throw new Error(error.message || error);
	}
};

// 🚀 create a thunk action called getWishListService
// ⚠️ don't forget the dispatch argument
//❗ use tryCatch and throw Error
// 🛩️ On to the recipes actions

// ------------ example -----------------

// inside our component
// dispatch(getTodos())
// getTodos is a thunk action creator
// function getTodos() {

//   // getTodosFromApi is a thunk function
//   return async function getTodosFromApi(dispatch) {
//     const response = await Axios.get('/todos');
//     dispatch(fillTodos(response.data))
//   }
// }

// arrow function version

// const getTodos() => () => (dispatch) => {
//    const response = await Axios.get('/todos');
//     dispatch(fillTodos(response.data))
// }
