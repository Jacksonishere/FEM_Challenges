import React, { useContext, useEffect, useState, useRef } from "react";
import { ModalOverlayContext } from "../context/ModalOverlayContext";
import { TriggerContext } from "../context/TriggerContext";

import PledgeCard from "./subcomponents/PledgeCard";

import check from "../images/icon-check.svg";

const Modal = () => {
	const { idTrigger, setIdTrigger } = useContext(TriggerContext);
	const { status, setStatus } = useContext(ModalOverlayContext);

	const scrollTopTimeout = useRef();
	const domNodeTop = useRef();

	const domNode = useRef();
	const handler = (e) => {
		if (!domNode.current.contains(e.target)) {
			setStatus("hidden");
		}
	};
	const resetModal = () => {
		scrollTopTimeout.current = setTimeout(() => {
			console.log("resetmodal called");
			setIdTrigger(-2);
			domNodeTop.current.scrollIntoView();
		}, 300);
	};

	const successHandler = (e) => {
		setStatus("pledged");
	};

	useEffect(() => {
		if (status === "hidden") {
			resetModal();
		} else {
			clearTimeout(scrollTopTimeout.current);
		}

		if (status === "show") {
			document.addEventListener("mousedown", handler);
		}
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, [status]);

	return (
		<>
			<article ref={domNode} className={`container modal ${status === "show" ? "enabled" : ""}`}>
				<section ref={domNodeTop} className="modal-back">
					<h2 className="modal-back-title">Back this project</h2>
					<button className="modal-back-close" onClick={() => setStatus("hidden")}>
						<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
								fill="#000"
								fillRule="evenodd"
								opacity=".4"
							/>
						</svg>
					</button>
					<p className="modal-back-support">
						Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
					</p>
				</section>
				<section className="">
					<PledgeCard id={0} successHandler={successHandler} />
					<PledgeCard id={1} successHandler={successHandler} />
					<PledgeCard id={2} successHandler={successHandler} />
					<PledgeCard id={3} successHandler={successHandler} />
				</section>
			</article>
			<div className={`container pledged-modal ${status === "pledged" ? "enabled" : ""}`}>
				<figure>
					<img src={check} alt="" />
				</figure>
				<h2>Thanks for your support!</h2>
				<p>
					Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an
					email once our campaign is completed.
				</p>
				<button
					onClick={() => {
						setStatus("hidden");
					}}>
					Got it!
				</button>
			</div>
		</>
	);
};

export default Modal;
