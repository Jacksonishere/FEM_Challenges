import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { GalleryData } from "../../data";

const GallerySlider = () => {
	let { id } = useParams();
	let galleryItem = GalleryData[id];
	return (
		<footer className="gallery-slider-footer">
			<div className="slider-number"></div>
			<section className="container gallery-slider">
				<div className="gallery-slider-info">
					<b>{galleryItem.name}</b>
					<p>{galleryItem.artist.name}</p>
				</div>
				<div className="gallery-slider-buttons">
					<button className="back-btn">
						<svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
							<g stroke="#000" fill="none" fillRule="evenodd">
								<path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" strokeWidth="2" />
								<path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
							</g>
						</svg>
					</button>
					<button className="fwrd-btn">
						<svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
							<g stroke="#000" fill="none" fillRule="evenodd">
								<path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" strokeWidth="2" />
								<path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
							</g>
						</svg>
					</button>
				</div>
			</section>
		</footer>
	);
};

export default GallerySlider;
