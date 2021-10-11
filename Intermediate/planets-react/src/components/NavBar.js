import React, { useState, useEffect } from "react";
//react responsive
import { useMediaQuery } from "react-responsive";
//react router
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router";
//framer motion
import { motion, AnimatePresence } from "framer-motion";

//data
import { planets } from "../data";

const NavBar = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	//for mobile menu toggle
	const [show, setShow] = useState(false);
	const showMobileMenuHandler = () => setShow((currShow) => !currShow);

	return (
		<nav className="container nav">
			<p className="nav-logo">the planets</p>
			{isMobile ? (
				<>
					<AnimatePresence>{show && <NavMobileMenu show={show} />}</AnimatePresence>
					<HamButton hamCLicked={showMobileMenuHandler} show={show} />
				</>
			) : (
				<NavMenu />
			)}
		</nav>
	);
};

const mobileMenuVar = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	exit: {
		y: -40,
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeOut",
		},
	},
};

const mobileMenuItemVar = {
	hidden: {
		x: "-100vw",
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			mass: 0.8,
		},
	},
};

const NavMobileMenu = ({ show }) => {
	return (
		<motion.ul variants={mobileMenuVar} initial="hidden" animate="visible" exit="exit" className="nav-mobile-menu">
			{planets.map((planet, index) => (
				<NavMobileItem key={index} planetName={planet.name} />
			))}
		</motion.ul>
	);
};

const NavMobileItem = ({ planetName }) => {
	return (
		<motion.li variants={mobileMenuItemVar}>
			<Link to={`planet/${planetName}`} className="nav-mobile-menu-item">
				<div className={`circle ${planetName.toLowerCase()}`}></div>
				<svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="6" height="8">
					<path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
				</svg>{" "}
				<p className="planet">{planetName}</p>
			</Link>
		</motion.li>
	);
};

const NavMenu = () => {
	const { pathname } = useLocation();
	const planet = pathname.split("/")[1].toLowerCase();
	const [currPlanet, setCurrPlanet] = useState(planet);

	useEffect(() => {
		console.log(pathname, pathname.split("/"));
		if (pathname === "/") {
			setCurrPlanet("mercury");
		} else {
			setCurrPlanet(planet);
		}
	}, [pathname]);

	return (
		<ul className="nav-menu">
			{planets.map((planet, index) => (
				<NavItem key={index} planetName={planet.name} currPlanet={currPlanet} />
			))}
		</ul>
	);
};

const navItemBarVar = {
	initial: {
		scale: 0,
	},
	hover: {
		scale: 1,
	},
};
const navItemLinkVar = {
	initial: {
		opacity: 0.7,
	},
	hover: {
		opacity: 1,
	},
};

const NavItem = ({ planetName, currPlanet }) => {
	const planet = planetName.toLowerCase();
	const samePlanet = planet === currPlanet;
	useEffect(() => {
		console.log(samePlanet, planet, currPlanet);
	});
	return (
		<motion.li initial="initial" whileHover="hover" className={`${samePlanet ? "selected" : ""}`}>
			<motion.div variants={navItemBarVar} className={`bar ${planet}`}></motion.div>
			<Link to={samePlanet ? "#" : `/${planet}`} className="nav-menu-item">
				<motion.p variants={navItemLinkVar} className="planet">
					{planetName}
				</motion.p>
			</Link>
		</motion.li>
	);
};

const topBarVar = {
	animate: (show) => {
		switch (show) {
			case true:
				return {
					originX: 0.1,
					rotate: 45,
				};
			default:
				return {
					originX: 0.1,
					rotate: 0,
				};
		}
	},
};

const middleBarVar = {
	animate: (show) => {
		switch (show) {
			case true:
				return {
					opacity: 0,
					transition: { duration: 0.1, type: "tween" },
				};
			default:
				return {
					opacity: 1,
					transition: { duration: 0.2, type: "tween" },
				};
		}
	},
};

const botBarVar = {
	animate: (show) => {
		switch (show) {
			case true:
				return {
					originX: 0.1,
					rotate: -45,
				};
			default:
				return {
					originX: 0.1,
					rotate: 0,
				};
		}
	},
};

const HamButton = ({ hamCLicked, show }) => {
	return (
		<div className="nav-ham" onClick={hamCLicked}>
			<motion.div variants={topBarVar} animate="animate" custom={show} className="nav-ham-bar"></motion.div>
			<motion.div variants={middleBarVar} animate="animate" custom={show} className="nav-ham-bar"></motion.div>
			<motion.div variants={botBarVar} animate="animate" custom={show} className="nav-ham-bar"></motion.div>
		</div>
	);
};

export default NavBar;
