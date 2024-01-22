import classes from './MainNavigation.module.css'
import React from 'react';
import {NavLink} from "react-router-dom";

const MainNavigation = props => {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to="/"
							className={({isActive}) =>
								isActive ? classes.active : undefined
							}
							// style={({isActive}) => ({
							// 	fontSize: isActive ? '18px' : undefined
							// })}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/products"
							className={({isActive}) =>
								isActive ? classes.active : undefined
							}
						>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation