import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

const ModalOverlay = ({ on }) => {
    const modalOverlay = useRef();
        
	useEffect(() => {
		console.log("it is ", on);
	}, [on]);

	return (
		<CSSTransition nodeRef={modalOverlay} in={on === true} timeout={300} classNames="on" unmountOnExit>
			<div ref={modalOverlay} className="pledge-overlay"></div>
		</CSSTransition>
	);
};

const mapStateToProps = (state) => {
	return {
		on: state.overlay.on,
	};
};

//connect state as props
export default connect(mapStateToProps, null)(ModalOverlay);
