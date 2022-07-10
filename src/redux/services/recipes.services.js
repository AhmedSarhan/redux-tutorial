import {
	getRecipesAction,
	getWishListAction,
} from '../actions/recipes.actions';
import Axios from './../../api/axios';
const { v4: uuid } = require('uuid');

// generating random unique userId
const id = uuid();

console.log('userId', id);

// get the userId from the console
const USER_ID = '7a55c6e9-173b-4392-9c3a-4b9dd4ae1086';

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

export const getWishListService = () => async (dispatch, getState) => {
	try {
		const response = await Axios.get(`/wishlist/${USER_ID}.json`);
		console.log('response', response.data);

		const recipes = getState().blog.recipes;
		const wishListIds = [...response.data];

		const wishlist = [];
		recipes.forEach((recipe) => {
			wishListIds.forEach((id) => {
				if (recipe.id === id) wishlist.push(recipe);
			});
		});
		console.log('wishlist', wishlist);
		dispatch(getWishListAction(wishlist));
	} catch (error) {
		throw new Error(error.message || error);
	}
};

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

// const getTodos() => () => (dispatch, getState) => {
// const state = getState();
// const token = state.auth.token
//    const response = await Axios.get('/todos'{
// 	headers: {
// 		Authorization: `Bearer ${token}`
// 	}
// }
// );
//     dispatch(fillTodos(response.data))
// }
