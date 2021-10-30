import React from "react";
import { motion } from "framer-motion";

const linkVar = {
	hover: {
		scale: 1.05,
		transition: { duration: 0.3 },
	},
};
const arrowVar = {
	hover: {
		x: 30,
		transition: { yoyo: Infinity, duration: 0.6 },
	},
};

const Discover = () => {
	return (
		<section className="container discover">
			<h1>Discover innovative ways to decorate</h1>
			<p>
				We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine
				form and function in bringing your vision to life. Create a room in your own style with our collection and make
				your property a reflection of you and what you love.
			</p>
			<motion.a href="#" variants={linkVar} whileHover="hover">
				shop now
				<motion.i variants={arrowVar}>
					<svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
							fill="#000"
							fillRule="nonzero"
						/>
					</svg>
				</motion.i>
			</motion.a>
		</section>
	);
};

export default Discover;
