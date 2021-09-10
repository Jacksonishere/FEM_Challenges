import React from "react";
import { useState, useRef } from "react";

import useClickOutside from "../customHooks/useClickOutside";
import Logo from "../images/logo.svg";

const Header = ({ triggerOverlay }) => {
	const [isToggled, setIsToggled] = useState(false);

	const triggerToggles = (toggle) => {
		console.log("triggering");
		setIsToggled(toggle);
		triggerOverlay(toggle);
	};
	
	const menu = useClickOutside(() => {
		triggerToggles(false);
		console.log("clicked outside");
	});
	return (
		<header className={`header ${isToggled ? "enabled" : ""}`}>
			<nav className="container nav">
				<figure className="logo">
					<img src={Logo} alt="" />
				</figure>
				<ul ref={menu} className="nav-menu">
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Discover</a>
					</li>
					<li>
						<a href="#">Get Started</a>
					</li>
				</ul>
				<div className="nav-mobile">
					<button
						onClick={(e) => {
							triggerToggles(true);
						}}
						className="nav-mobile-menu">
						<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
							<g fill="#FFF" fillRule="evenodd">
								<path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
							</g>
						</svg>
					</button>
					<button
						onClick={(e) => {
							triggerToggles(false);
						}}
						className="nav-mobile-close">
						<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
							<g fill="#FFF" fillRule="evenodd">
								<path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
								<path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
							</g>
						</svg>
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
