import React from "react";
import { useContext } from "react/cjs/react.development";
import { ModalOverlayContext } from "../context/ModalOverlayContext";
// import { TriggerContext } from "../context/TriggerContext";


const Pledge = () => {
	// const {setIdTrigger} = useContext(TriggerContext);
	const {setStatus} = useContext(ModalOverlayContext);
	return (
		<section className="container pledge">
			<h1>Mastecraft Bamboo Monitor Riser</h1>
			<p>A beautifully handcrafted monitor stand to reduce neck and eye strain</p>
			<div className="interactions">
				<button className="back" onClick={(e) => {
					// setIdTrigger(-1);
					setStatus("show");
				}}>Back this project</button>
				<button className="bookmark">
					<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
						<g fill="none" fillRule="evenodd">
							<circle fill="#2F2F2F" cx="28" cy="28" r="28" />
							<path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
						</g>
					</svg>
				</button>
			</div>
		</section>
	);
};

export default Pledge;
