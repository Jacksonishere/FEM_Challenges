import React, { useEffect, useCallback, useRef } from "react";
import { connect, batch } from "react-redux";
import { backCancel, toggleOff } from "../redux";

import { CSSTransition } from "react-transition-group";

import PledgeCard from "./subcomponents/PledgeCard";
import useOutsideClick from "../customHooks/useClickOutside";
import check from "../images/icon-check.svg";

const Modal = ({ show, backing, cancel, toggleOverlayOff }) => {
	const scrollTimeout = useRef();

	const scrolltoViewRef = useCallback((domNode) => {
		if (domNode != null) {
			clearTimeout(scrollTimeout.current);
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

	const showingRef = useRef();
	const modalRef = useCallback((modalNode) => {
		let outsideClickHandler = (e) => {
			if (!modalNode.contains(e.target)) {
				document.removeEventListener("mousedown", outsideClickHandler);

				if (showingRef.current !== "thankyou") {
					cancelBack();
				}
			}
		};
		if (modalNode != null) {
			document.addEventListener("mousedown", outsideClickHandler);
		}
	}, []);

	useEffect(() => {
		showingRef.current = show;
	}, [show]);

	return (
		<>
			<CSSTransition in={show === "pledge"} timeout={300} classNames="modal" unmountOnExit>
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
						<PledgeCard id={"back"} ref={backing === "back" ? scrolltoViewRef : null} back={"back"} />
						<PledgeCard id={"bamboo"} ref={backing === "bamboo" ? scrolltoViewRef : null} back={"bamboo"} />
						<PledgeCard id={"black"} ref={backing === "black" ? scrolltoViewRef : null} back={"black"} />
						<PledgeCard id={"mahogany"} ref={backing === "mahogany" ? scrolltoViewRef : null} back={"mahogany"} />
					</div>
				</article>
			</CSSTransition>
			<CSSTransition in={show === "thankyou"} timeout={1000} classNames="thankyou" unmountOnExit>
				<div className="container pledged-modal">
					<figure>
						<img src={check} alt="" />
					</figure>
					<h2>Thanks for your support!</h2>
					<p>
						Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an
						email once our campaign is completed.
					</p>
					<button onClick={cancelBack}>Got it!</button>
				</div>
			</CSSTransition>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		show: state.modal.show,
		backing: state.modal.backing,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		cancel: () => dispatch(backCancel()),
		toggleOverlayOff: () => dispatch(toggleOff()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
