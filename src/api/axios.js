import axios from 'axios';

const FIRE_BASE_API = process.env.REACT_APP_FIRE_BASE_API;

const Axios = axios.create({
	baseURL: FIRE_BASE_API,
});

export default Axios;
