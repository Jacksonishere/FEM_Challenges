import React , { useContext, useState } from "react";
import { ModalOverlayContext } from "../context/ModalOverlayContext";


const Pledge = () => {
	const {setStatus} = useContext(ModalOverlayContext);

	const [bookedMarked, setBookMarked] = useState(false);
	const toggleBookMarked = () => {
		setBookMarked(a => !a);
	}

	return (
		<section className="container pledge">
			<h2>Mastecraft Bamboo Monitor Riser</h2>
			<p>A beautifully handcrafted monitor stand to reduce neck and eye strain</p>
			<div className={`interactions ${bookedMarked ? "bookmarked" : ''}`}>
				<button className="back" onClick={(e) => {
					setStatus("show");
				}}>Back this project</button>
				<button className="bookmark" onClick={toggleBookMarked}>
					<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
						<g fill="none" fillRule="evenodd">
							<circle fill="#2F2F2F" cx="28" cy="28" r="28" />
							<path fill="#FFFF" d="M23 19v18l5-5.058L33 37V19z" />
						</g>
					</svg>
				</button>
			</div>
		</section>
	);
};

export default Pledge;
