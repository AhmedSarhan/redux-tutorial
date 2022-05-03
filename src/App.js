import './App.css';
import Header from './components/Navigation/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route element={<Cart />} path="/cart" exact />
					<Route element={<Menu />} path="/" exact />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
