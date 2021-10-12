import React, { useState } from "react";
//router
import { useParams } from "react-router";
//data
import { planets } from "../data";

const PlanetPage = () => {
	const { planet } = useParams();
	const currPlanet = planets.filter((currPlanet) => currPlanet.name.toLowerCase() === planet);
	const [category, setCategory] = useState("overview");

	return (
		<main className="container main">
			<Categories category={category} setCategory={setCategory} />
		</main>
	);
};

const Categories = ({ category, setCategory }) => {
	return (
		<div className="categories">
			<button className={`${category === "overview" ? "selected" : ""}`} onClick={() => setCategory("overview")}>
				overview
			</button>
			<button className={`${category === "structure" ? "selected" : ""}`} onClick={() => setCategory("structure")}>
				structure
			</button>
			<button className={`${category === "surface" ? "selected" : ""}`} onClick={() => setCategory("surface")}>
				surface
			</button>
		</div>
	);
};

export default PlanetPage;
