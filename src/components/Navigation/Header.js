import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import styles from './header.module.scss';
import { useSelector } from 'react-redux';
const Header = () => {
	const cartLength = useSelector((state) =>
		state.menu.cart.reduce((a, b) => a + b.quantity, 0)
	);
	return (
		<header className={styles.header}>
			<NavLink to="/" className={styles['navbar-brand']}>
				Pizza Hub
			</NavLink>

			<ul>
				<li>
					<NavLink
						className={({ isActive }) =>
							styles['nav-link'] +
							(isActive ? ` ${styles['nav-link-active']}` : '')
						}
						to="/wishlist"
					>
						Wishlist
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							styles['nav-link'] +
							(isActive ? ` ${styles['nav-link-active']}` : '')
						}
						to="/recipes"
					>
						Blog
					</NavLink>
				</li>
				{/* <li>
					<NavLink
						className={({ isActive }) =>
							styles['nav-link'] +
							(isActive ? ` ${styles['nav-link-active']}` : '')
						}
						to="/add-recipes"
					>
						Add Recipes
					</NavLink>
				</li> */}
				<li>
					<NavLink
						className={({ isActive }) =>
							styles['nav-link'] +
							(isActive ? ` ${styles['nav-link-active']}` : '')
						}
						to="/"
					>
						Menu
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							styles['nav-link'] +
							(isActive ? ` ${styles['nav-link-active']}` : '')
						}
						to="/cart"
					>
						<div className={styles['cart-link']}>
							<span>{cartLength}</span>
							<BsCart2 />
						</div>
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
