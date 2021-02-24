import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
	<div className="header">
		<div className="logo"></div>
		<nav className="navbar">
			<div className="logo">
				<Link to="/portfolio">
					Portfo<span className="logo-second">lio.</span>
				</Link>
			</div>
			<ul className="menu">
				<li>
					<Link to="#">Home</Link>
				</li>
				<li>
					<Link to="#">About</Link>
				</li>
				<li>
					<Link to="#">Services</Link>
				</li>
				<li>
					<Link to="#">Skills</Link>
				</li>
				<li>
					<Link to="#">Teams</Link>
				</li>
				<li>
					<Link to="#">Contact</Link>
				</li>
			</ul>
		</nav>
	</div>
);

export default Header;
