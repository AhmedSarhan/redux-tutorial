import {
	getRecipesAction,
	getWishListAction,
	addToWishListAction,
	removeFromWishListAction,
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

// dispatch(addToWishListService(recipe.id))

export const addToWishListService = (recipeId) => async (
	dispatch,
	getState
) => {
	const { wishlist, recipes } = getState().blog;
	try {
		const response = await Axios.patch(`/wishlist/${USER_ID}.json`, {
			[wishlist.length]: recipeId,
		});
		console.log('response', response.data);
		const wishlitedRecipe = recipes.find((recipe) => recipe.id === recipeId);
		dispatch(addToWishListAction(wishlitedRecipe));
	} catch (error) {
		throw new Error(error.message || error);
	}
};

export const removeFromWishListService = (recipeId) => async (
	dispatch,
	getState
) => {
	const wishlist = getState().blog.wishlist;
	const newWishList = wishlist.filter((recipe) => recipe.id !== recipeId);
	const newWishListIds = newWishList.map((recipe) => recipe.id);

	try {
		const response = await Axios.put(
			`/wishlist/${USER_ID}.json`,
			newWishListIds
		);
		console.log('response', response.data);
		dispatch(removeFromWishListAction(recipeId));
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
