import React from "react";
//Component
import GalleryItem from "./GalleryItem";

import { GalleryData } from "../../data";

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
