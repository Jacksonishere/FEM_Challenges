import React, { useState } from "react";

import { useMediaQuery } from "react-responsive";

import { motion, AnimatePresence } from "framer-motion";

import hamMenu from "../images/icon-hamburger.svg";
import closeHamMenu from "../images/icon-close.svg";
import logo from "../images/logo.svg";

const Header = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return <header className="header">{isMobile ? <MobileNavBar /> : <NavBar />}</header>;
};

const overlayVar = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},
	exit: {
		opacity: 0,
	},
};
const navMenuVar = {
	hidden: {
		opacity: 0,
		left: "100%",
	},

	visible: {
		opacity: 1,
		left: 0,
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},

	exit: {
		opacity: 0,
		left: "100%",
	},
};
const MobileNavBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	console.log("rendering mobile navbar", showMenu);

	return (
		<>
			<AnimatePresence>
				{showMenu && (
					<motion.div
						className="overlay"
						variants={overlayVar}
						initial="hidden"
						animate="visible"
						exit="exit"></motion.div>
				)}
			</AnimatePresence>

			<nav className="container mobile-nav-bar">
				<button className="ham" onClick={() => setShowMenu(true)}>
					<img src={hamMenu} alt="" />
				</button>
				<img src={logo} alt="" className="logo" />
				<AnimatePresence>
					{showMenu && (
						<motion.div
							variants={navMenuVar}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="mobile-nav-bar-menu">
							<button className="close" onClick={() => setShowMenu(false)}>
								<img src={closeHamMenu} alt="" />
							</button>
							<ul className="mobile-nav-bar-menu-links">
								<li>
									<a href="/">home</a>
								</li>
								<li>
									<a href="/">shop</a>
								</li>
								<li>
									<a href="/">about</a>
								</li>
								<li>
									<a href="/">contact</a>
								</li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</>
	);
};

const NavBar = () => {
	return (
		<nav className="container nav-bar">
			<img src={logo} alt="" className="logo" />

			<ul className="nav-bar-links">
				<li>
					<a href="/">home</a>
				</li>
				<li>
					<a href="/">shop</a>
				</li>
				<li>
					<a href="/">about</a>
				</li>
				<li>
					<a href="/">contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
