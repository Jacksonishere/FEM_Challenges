import * as pledgedTypes from "./pledgedTypes";

export const pledged = () => {
	return {
		type: pledgedTypes.PLEDGED,
	};
};

export const unpledged = () => {
	return {
		type: pledgedTypes.UNPLEDGED,
	};
};