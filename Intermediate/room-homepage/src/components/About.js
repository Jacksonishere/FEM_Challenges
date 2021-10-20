import React from "react";

import imgDark from "../images/image-about-dark.jpg";
import imgLight from "../images/image-about-light.jpg";

const About = () => {
	return (
		<section className="about">
			<img src={imgDark} alt="" className="dark" />
			<div className="container about-content">
				<b className="title">about our furniture</b>
				<p>
					Our multifunctional collection blends design and function to suit your individual taste. Make each room
					unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture
					pieces you need, from traditional to contemporary styles or anything in between. Product specialists are
					available to help you create your dream space.{" "}
				</p>
			</div>
			<img src={imgLight} alt="" className="light" />
		</section>
	);
};

export default About;
