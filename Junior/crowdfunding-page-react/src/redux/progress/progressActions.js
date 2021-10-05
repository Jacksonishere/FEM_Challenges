import * as progressTypes from "./progressTypes";

export const updateProgress = (amount) => {
	return {
		type: progressTypes.UPDATE_PROGRESS,
		amount: amount,
	};
};

