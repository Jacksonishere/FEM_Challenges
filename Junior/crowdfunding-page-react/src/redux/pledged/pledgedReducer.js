import * as pledgedTypes from "./pledgedTypes";

const initialState = {
	pledged: null,
};

const pledgedReducer = (state = initialState, action) => {
	switch (action.type) {
		case pledgedTypes.PLEDGED:
			return {
				pledged: true,
			};
		case pledgedTypes.UNPLEDGED:
			return {
				pledged: false,
			};
		default:
			return {
				state,
			};
	}
};

export default pledgedReducer;
