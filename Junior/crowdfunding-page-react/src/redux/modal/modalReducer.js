import * as modalTypes from "./modalTypes";

const initialState = {
	show: false,
	backing: "",
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case modalTypes.BACK:
			return {
				...state,
				show: true,
			};
		case modalTypes.BACK_PROJECT:
			return {
				show: true,
				backing: "project",
			};

		case modalTypes.BACK_BAMBOO:
			return {
				show: true,
				backing: "bamboo",
			};
		case modalTypes.BACK_BLACK:
			return {
				show: true,
				backing: "black",
			};
		case modalTypes.BACK_MAHOGANY:
			return {
				show: true,
				backing: "mahogany",
			};
		case modalTypes.BACK_CANCEL:
			return initialState;

		default:
			return state;
	}
};

export default modalReducer;
