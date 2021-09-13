import React, {useContext} from "react";
import { OverlayContext } from "../../context/OverlayContext";

const Overlay = () => {
    const { toggleOverlay } = useContext(OverlayContext);

	return (<div className={`overlay ${toggleOverlay ? "show" : ""}`}></div>) ;
};

export default Overlay;
