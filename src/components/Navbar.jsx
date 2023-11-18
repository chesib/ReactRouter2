import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="nav-list">
				<li className="nav-item">
					<NavLink
						className={({ isActive }) =>
							isActive ? "active-link" : undefined
						}
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						className={({ isActive }) =>
							isActive ? "active-link" : undefined
						}
						to="/pokemon"
					>
						pokemon
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
