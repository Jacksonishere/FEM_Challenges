import { TOGGLE_ON, TOGGLE_OFF } from "./modalOverlayTypes";

const initialState = {
	on: false,
};

const modalOverlayReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_ON:
			return {
				on: true,
			};

		case TOGGLE_OFF:
			return {
				on: false,
			};

		default:
			return state;
	}
};

export default modalOverlayReducer;
