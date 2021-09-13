import React, {useContext} from "react";
import { ModalOverlayContext } from "../../context/ModalOverlayContext";

const ModalOverlay = () => {
    const { status } = useContext(ModalOverlayContext);

	return (<div className={`pledge-overlay ${status !== "hidden" ? "show" : ""}`}></div>) ;
};

export default ModalOverlay;
