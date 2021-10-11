import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import { motion } from "framer-motion";

const GalleryItemContainer = {
	hidden: {
		opacity: 0,
		y: -10,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "tween",
			duration: 0.8,
			when: "beforeChildren",
		},
	},
	hover: {
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			type: "tween",
			duration: 0.8,
		},
	},
};

const GalleryInfoContainer = {
	hidden: {
		bottom: 10,
		opacity: 0,
	},
	visible: {
		bottom: 30,
		opacity: 1,
		transition: {
			type: "tween",
			duration: 0.5,
			ease: "easeIn",
		},
	},
	exit: {},
};

const GalleryImageHover = {
	hover: {
		scale: 1.05,
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},
	exit: {},
};

const GalleryItem = ({ id, galleryItem }) => {
	const location = useLocation();
	return (
		<motion.div
			className="gallery-container"
			variants={GalleryItemContainer}
			initial="hidden"
			animate="visible"
			whileHover="hover"
			exit="exit"
			>
			<Link className="gallery-item" to={"gallery/" + id}>
				<motion.img src={galleryItem.images.thumbnail} alt="" variants={GalleryImageHover} />
				<motion.div className="gallery-item-info" variants={GalleryInfoContainer}>
					<h2>{galleryItem.name}</h2>
					<p>{galleryItem.artist.name}</p>
				</motion.div>
			</Link>
		</motion.div>
	);
};

export default GalleryItem;
