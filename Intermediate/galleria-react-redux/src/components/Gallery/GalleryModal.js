import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";

import { untoggleModal } from "../../redux/modal/modalSlice";

const GalleryModal = () => {
	const { show, showImage } = useSelector((state) => state.modal);
	const dispatch = useDispatch();

	const untoggleModalHandler = () => {
		dispatch(untoggleModal());
	};

	//When the route changes and the modal is showing, we simply untoggle it.
	const location = useLocation();
	useEffect(() => {
		if (show) {
			untoggleModalHandler();
		}
	}, [location]);

	const modalContent = useRef();
	useEffect(() => {
		let outsideClickHandler = (e) => {
			if (!modalContent.current.contains(e.target)) {
				untoggleModalHandler();
				document.removeEventListener("mousedown", outsideClickHandler);
			}
		};
		if (modalContent && show) {
			document.addEventListener("mousedown", outsideClickHandler);
		}
		return () => document.removeEventListener("mousedown", outsideClickHandler);
	}, [show]);

	return (
		show && (
			<div className="gallery-modal">
				<div className="gallery-modal-content" ref={modalContent}>
					<button className="close" onClick={() => dispatch(untoggleModal())}>
						close
					</button>
					<img src={showImage} alt="" />
				</div>
			</div>
		)
	);
};

export default GalleryModal;
