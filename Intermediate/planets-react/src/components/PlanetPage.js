import React, { useState } from "react";
//data
import { planets } from "../data";
//redux
import { useSelector } from "react-redux";
//motion
import { motion } from "framer-motion";

const PlanetPage = () => {
	const [subject, setSubject] = useState("overview");

	return (
		<main className="container planet">
			<Categories subject={subject} setSubject={setSubject} />
			<PlanetInfo subject={subject} />
			<PlanetMoreInfo />
		</main>
	);
};

const Categories = ({ subject, setSubject }) => {
	const currPlanet = useSelector((state) => state.planet.planet);
	return (
		<div className="planet-subject">
			<button
				className={`${subject === "overview" ? "selected" : ""} ${currPlanet} overview`}
				onClick={() => setSubject("overview")}>
				overview
			</button>
			<button
				className={`${subject === "structure" ? "selected" : ""} ${currPlanet} structure`}
				onClick={() => setSubject("structure")}>
				structure
			</button>
			<button
				className={`${subject === "surface" ? "selected" : ""} ${currPlanet} surface`}
				onClick={() => setSubject("surface")}>
				surface
			</button>
		</div>
	);
};

const h1Var = {
	initial: {
		y: 20,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
};
const PlanetInfo = ({ subject }) => {
	const currPlanet = useSelector((state) => state.planet.planet);
	const planet = planets.filter((planet) => planet.name === currPlanet)[0];

	const planetInfo =
		subject === "surface"
			? { ...planet.geology, images: planet.images }
			: { ...planet[subject], images: planet.images };

	const planetImages = () => {
		switch (subject) {
			case "overview":
				return <img src={planetInfo.images.planet} alt="" />;
			case "structure":
				return <img src={planetInfo.images.internal} alt="" />;
			default:
				return (
					<>
						<img src={planetInfo.images.planet} alt="" />
						<img className={`surface ${currPlanet}`} src={planetInfo.images.geology} alt="" />
					</>
				);
		}
	};
	return (
		<>
			<div className="figure-container">
				<figure className={currPlanet}>{planetImages()}</figure>
			</div>
			<section className="planet-info ">
				<motion.h1 key={currPlanet} variants={h1Var} initial="initial" animate="animate">
					{planet.name}
				</motion.h1>
				<p className="desc">{planetInfo.content}</p>
				<p className="source">
					Source :
					<a className="link" href={planetInfo.source} target="_blank">
						<u>Wikipedia</u>
					</a>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
							<path
								fill="#FFF"
								d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
								opacity=".5"
							/>
						</svg>
					</span>
				</p>
			</section>
		</>
	);
};

const PlanetMoreInfo = () => {
	const currPlanet = useSelector((state) => state.planet.planet);
	const planet = planets.filter((planet) => planet.name === currPlanet)[0];

	return (
		<section className="planet-moreInfo">
			<div className="card rotation">
				<p>rotation time</p>
				<h2>{planet.rotation}</h2>
			</div>
			<div className="card revolution">
				<p>revolution time</p>
				<h2>{planet.revolution}</h2>
			</div>
			<div className="card radius">
				<p>radius</p>
				<h2>{planet.radius}</h2>
			</div>
			<div className="card temp">
				<p>average temp.</p>
				<h2>{planet.temperature}</h2>
			</div>
		</section>
	);
};

export default PlanetPage;
