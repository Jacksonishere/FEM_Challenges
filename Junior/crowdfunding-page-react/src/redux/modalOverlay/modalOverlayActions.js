import { TOGGLE_ON, TOGGLE_OFF } from "./modalOverlayTypes";

export const toggleOn = () => {
	return { type: TOGGLE_ON };
};

export const toggleOff = () => {
	return { type: TOGGLE_OFF };
};
