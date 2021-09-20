import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/shared/logo.svg";

const Header = ({ className }) => {
	return (
		<header className={`header ${className ? "header-home" : ""}`}>
			{/* <figure className="container"> */}
			<Link className="container homelink" to="/">
				<img src={logo} alt="logo" />
			</Link>
			{/* </figure> */}
		</header>
	);
};

export default Header;
