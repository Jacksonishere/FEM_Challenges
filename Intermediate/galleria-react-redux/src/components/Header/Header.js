import React from "react";
import logo from "../../assets/shared/logo.svg";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import ResetClick from "../../customHooks/ResetClick";
import { resetClicked } from "../../redux/slider/slidingSlice";

const Header = () => {
	//Get pathname
	const { pathname } = useLocation();
	const onHome = pathname === "/";

	return (
		<header className="header">
			<div className="container header-content">
				<Link
					className="logo"
					to="/"
					style={{ pointerEvents: onHome ? "none" : "auto" }}
					ref={ResetClick(resetClicked)}>
					<img src={logo} alt="" />
				</Link>
				<Link className="start" to={onHome ? "/gallery/0" : "/"} ref={ResetClick(resetClicked)}>
					{onHome ? "Start Slideshow" : "Stop Slideshow"}
				</Link>
			</div>
		</header>
	);
};

export default Header;
