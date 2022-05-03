import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import styles from './header.module.scss';
const Header = () => {
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
							<span>2</span>
							<BsCart2 />
						</div>
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
