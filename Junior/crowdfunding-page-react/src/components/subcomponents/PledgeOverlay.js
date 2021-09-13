import React, {useContext} from "react";
import { TriggerContext } from "../../context/TriggerContext";

const Overlay = () => {
    const { idTrigger } = useContext(TriggerContext);

	return (<div className={`pledge-overlay ${idTrigger >= -1 ? "show" : ""}`}></div>) ;
};

export default Overlay;
