import React, { useState } from "react";

import mobilehero1 from "../images/mobile-image-hero-1.jpg";
import mobilehero2 from "../images/mobile-image-hero-2.jpg";
import mobilehero3 from "../images/mobile-image-hero-3.jpg";

import hero1 from "../images/desktop-image-hero-1.jpg";
import hero2 from "../images/desktop-image-hero-2.jpg";
import hero3 from "../images/desktop-image-hero-3.jpg";

import left from "../images/icon-angle-left.svg";
import right from "../images/icon-angle-right.svg";

import { motion, AnimatePresence } from "framer-motion";

import { useMediaQuery } from "react-responsive";

const heroVar = {
	enter: {
		opacity: 0,
	},
	center: {
		opacity: 1,
	},
	exit: {
		position: "absolute",
		opacity: 0,
	},
};

const Carousel = () => {
	const isNotMobile = useMediaQuery({ minWidth: 768 });
	let images = [];
	if (!isNotMobile) {
		images = [mobilehero1, mobilehero2, mobilehero3];
	} else {
		images = [hero1, hero2, hero3];
	}

	const [currImage, setCurrImage] = useState(0);
	return (
		<section className="carousel">
			<AnimatePresence>
				<motion.img
					className="hero"
					key={currImage}
					src={images[currImage]}
					variants={heroVar}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						type: "tween",
						duration: 0.2,
					}}
				/>
			</AnimatePresence>
			<div className="carousel-btns">
				<button
					className="left"
					onClick={() => {
						if (currImage === 0) {
							setCurrImage(images.length - 1);
						} else {
							setCurrImage(currImage - 1);
						}
					}}>
					<img src={left} alt="" />
				</button>
				<button
					className="right"
					onClick={() => {
						setCurrImage((currImage + 1) % 3);
					}}>
					<img src={right} alt="" />
				</button>
			</div>
		</section>
	);
};

export default Carousel;
