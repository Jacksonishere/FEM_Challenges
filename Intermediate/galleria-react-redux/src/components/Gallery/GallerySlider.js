import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

//action creators
import { prevClicked, nextClicked } from "../../redux/slider/slidingSlice";
//custom hook
import ResetClick from "../../customHooks/ResetClick";
//data
import { GalleryData } from "../../data";

const GallerySlider = () => {
	let { id } = useParams();
	let galleryItem = GalleryData[id];

	//When the route changes and the page unmounts and remounts, we only need the sliderwith once. don't need any usestate or useeffect for this
	id = parseInt(id);
	let sliderWidth = ((parseInt(id) + 1) / 15) * 100;

	return (
		<footer className="gallery-slider-footer">
			<div className="slider-number" style={{ width: `${sliderWidth}%` }}></div>
			<section className="container gallery-slider">
				<div className="gallery-slider-info">
					<b>{galleryItem.name}</b>
					<p>{galleryItem.artist.name}</p>
				</div>
				<div className="gallery-slider-buttons">
					<Link
						className={`back-btn ${id === 0 ? "disabled" : ""}`}
						to={`/gallery/${parseInt(id) - 1}`}
						ref={ResetClick(prevClicked)}>
						<svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
							<g stroke="#000" fill="none" fillRule="evenodd">
								<path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" strokeWidth="2" />
								<path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
							</g>
						</svg>
					</Link>
					<Link
						className={`fwrd-btn ${id === 14 ? "disabled" : ""}`}
						to={`/gallery/${parseInt(id) + 1}`}
						ref={ResetClick(nextClicked)}>
						<svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
							<g stroke="#000" fill="none" fillRule="evenodd">
								<path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" strokeWidth="2" />
								<path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
							</g>
						</svg>
					</Link>
				</div>
			</section>
		</footer>
	);
};

export default GallerySlider;
