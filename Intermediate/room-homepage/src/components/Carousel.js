import React, { useState } from "react";

import hero1 from "../images/mobile-image-hero-1.jpg";
import hero2 from "../images/mobile-image-hero-2.jpg";
import hero3 from "../images/mobile-image-hero-3.jpg";

import left from "../images/icon-angle-left.svg";
import right from "../images/icon-angle-right.svg";

import { motion, AnimatePresence } from "framer-motion";

const heroVar = {
	enter: (direction) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	animate: {
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const Carousel = () => {
	const images = [hero1, hero2, hero3];

	const [[currImage, direction], setCurrImage] = useState([0, 0]);
	console.log(direction, "WTF", currImage);

	return (
		<section className="carousel">
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={currImage}
					src={images[currImage]}
					alt=""
					className="hero"
					variants={heroVar}
					initial="enter"
					animate="animate"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					exit="exit"
					custom={direction}
				/>
			</AnimatePresence>
			<div className="carousel-btns">
				<button
					className="left"
					onClick={() => {
						if (currImage === 0) {
							setCurrImage([images.length - 1, -1]);
						} else {
							setCurrImage([(currImage - 1) % images.length, -1]);
						}
					}}>
					<img src={left} alt="" />
				</button>
				<button
					className="right"
					onClick={() => {
						setCurrImage([(currImage + 1) % images.length, 1]);
					}}>
					<img src={right} alt="" />
				</button>
			</div>
		</section>
	);
};

export default Carousel;
