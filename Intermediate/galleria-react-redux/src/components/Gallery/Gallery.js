import React from "react";

import { GalleryData } from "../../data";
//Component
import GalleryItem from "./GalleryItem";

const Gallery = () => {
	return (
		<main className="gallery-section">
			<div className="container gallery">
				{GalleryData.map((item, index) => (
					<GalleryItem key={index} galleryItem={item} id={index} />
				))}
			</div>
		</main>
	);
};

export default Gallery;
