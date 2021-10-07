import React from "react";
import logo from "../../assets/shared/logo.svg";

import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<div className="container header-content">
				<Link className="logo" to="/">
					<img src={logo} alt="" />
				</Link>
				<Link className="start" to="/">
					Start Slideshow
				</Link>
			</div>
		</header>
	);
};

export default Header;
