import React, { useEffect, useCallback, useRef } from "react";
import { connect, batch } from "react-redux";
import { backCancel, toggleOff } from "../redux";

import { CSSTransition } from "react-transition-group";

import PledgeCard from "./subcomponents/PledgeCard";
import useOutsideClick from "../customHooks/useClickOutside";
import check from "../images/icon-check.svg";

const Modal = ({ show, back, cancel, toggleOverlayOff }) => {
	const scrollTimeout = useRef();

	const scrolltoViewRef = useCallback((domNode) => {
		console.log("received a domnode as its parameters");
		if (domNode != null) {
			scrollTimeout.current ?? clearTimeout(scrollTimeout.current);
			scrollTimeout.current = setTimeout(() => {
				domNode.scrollIntoView({ behavior: "smooth" });
			}, 500);
		}
	}, []);

	const cancelBack = () => {
		batch(() => {
			cancel();
			toggleOverlayOff();
		});
	};

	const modalRef = useCallback((modalNode) => {
		let outsideClickHandler = (e) => {
			if (!modalNode.contains(e.target)) {
				document.removeEventListener("mousedown", outsideClickHandler);
				cancelBack();
			}
		};
		if (modalNode != null) {
			document.addEventListener("mousedown", outsideClickHandler);
		}
	}, []);

	return (
		<>
			<CSSTransition in={show === true} timeout={300} classNames="modal" unmountOnExit>
				<article className="container modal" ref={modalRef}>
					<section className="modal-back">
						<h2 className="modal-back-title">Back this project</h2>
						<button className="modal-back-close" onClick={cancelBack}>
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
					<div className="pledge-cards">
						<PledgeCard id={0} ref={back === "project" ? scrolltoViewRef : null} back={"project"} />
						<PledgeCard id={1} ref={back === "bamboo" ? scrolltoViewRef : null} back={"bamboo"} />
						<PledgeCard id={2} ref={back === "black" ? scrolltoViewRef : null} back={"black"} />
						<PledgeCard id={3} ref={back === "mahogany" ? scrolltoViewRef : null} back={"mahogany"} />
					</div>
				</article>
			</CSSTransition>
			{/* <div className={`container pledged-modal ${status === "pledged" ? "enabled" : ""}`}>
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
			</div> */}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		show: state.modal.show,
		back: state.modal.backing,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		cancel: () => dispatch(backCancel()),
		toggleOverlayOff: () => dispatch(toggleOff()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
