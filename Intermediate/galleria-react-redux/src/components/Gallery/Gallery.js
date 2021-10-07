import React from "react";

import { GalleryData } from "../../data.js";
//Component
import GalleryItem from "./GalleryItem/GalleryItem";

const Gallery = () => {
	return (
		<section className="gallery-section">
			<div className="container gallery">
				{GalleryData.map((item, index) => (
					<GalleryItem key={index} galleryItem={item} id={index} />
				))}
			</div>
		</section>
	);
};

export default Gallery;
