import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { GalleryData } from "../../data";

const GalleryPage = () => {
	let { id } = useParams();
	let galleryItem = GalleryData[id];

	return (
		<main className="gallery-page-section">
			<div className="container">
				<section className="gallery-art">
					<button className="view-image">
						<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
							<g fill="#FFF" fillRule="nonzero">
								<path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z" />
							</g>
						</svg>
						<span>view image</span>
					</button>

					<picture className="gallery-art-hero">
						<source media="(min-width: 768px)" srcSet={galleryItem.images.hero.large} />
						<img src={galleryItem.images.hero.small} alt="" />
					</picture>

					<div className="gallery-art-info">
						<h1>{galleryItem.name}</h1>
						<p>{galleryItem.artist.name}</p>
					</div>

					<picture className="gallery-art-artist">
						<img src={galleryItem.artist.image} alt="" />
					</picture>
				</section>
				<section className="gallery-info">
					<p className="year">{galleryItem.year}</p>
					<div className="gallery-info-container">
						<p className="desc">{galleryItem.description}</p>
						<Link to={{ pathname: galleryItem.source }} target="_blank" className="source">
							go to source
						</Link>
					</div>
				</section>
			</div>
		</main>
	);
};

export default GalleryPage;
