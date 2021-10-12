import React from "react";
//framer motion
import { motion } from "framer-motion";

const randomRadius = () => {
	return Math.random() * 0.7 + 0.6;
};
const getRandomX = () => {
	// return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
	return Math.random() * 100;
};
const getRandomY = () => {
	// return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
	return Math.random() * 100;
};

const Background = () => {
	return (
		<div className="background">
			<Stars />
			<Comets />
		</div>
	);
};

const skyVar = {
	// initial: {},
	animate: {
		//if you don't stagger children, initially all the stars will play the animation, aka all appear at once.
		//The repeat delay happens after the first time the animation is played.
		transition: {
			staggerChildren: 0.05,
		},
	},
};
const starVar = {
	animate: (i) => {
		return {
			opacity: [0, 1],
			transition: {
				yoyo: "Infinity",
				duration: 1.4,
				repeatDelay: i * 0.05,
			},
		};
	},
};
const Stars = () => {
	return (
		<motion.svg variants={skyVar} initial="initial" animate="animate" className="sky">
			{[...Array(60)].map((x, y) => (
				<motion.circle
					variants={starVar}
					custom={y + 1}
					cx={`${getRandomX()}%`}
					cy={`${getRandomY()}%`}
					r={randomRadius()}
					stroke="none"
					strokeWidth="0"
					fill="white"
					key={y}
					className="star"
				/>
			))}
		</motion.svg>
	);
};

const cometSkyVar = {
	initial: {},
	animate: {},
};

const cometVar = {
	animate: (i) => {
		return {
			opacity: [0, 1, 0],
			width: [0, 150],
			translateX: [0, 350],
			transition: {
				repeat: "Infinity",
				repeatType: "loop",
				type: "tween",
				ease: "linear",
				duration: 0.7,
				delay: 1 * i,
				repeatDelay: 1 * i,
			},
		};
	},
};
const Comets = () => {
	return (
		<motion.div variants={cometSkyVar} initial="initial" animate="animate" className="sky sky-comet">
			{[...Array(15)].map((x, y) => (
				<motion.div
					key={y}
					variants={cometVar}
					custom={y + 1}
					className="comet"
					style={{
						left: `${getRandomY()}%`,
						top: `${getRandomX()}%`,
					}}
				/>
			))}
		</motion.div>
	);
};

export default Background;
