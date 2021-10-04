import * as modalTypes from "./modalTypes";

const initialState = {
	show: "",
	backing: "",
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case modalTypes.BACK:
			return {
				...state,
				show: "pledge",
			};
		case modalTypes.BACK_PROJECT:
			return {
				show: "pledge",
				backing: "project",
			};

		case modalTypes.BACK_BAMBOO:
			return {
				show: "pledge",
				backing: "bamboo",
			};
		case modalTypes.BACK_BLACK:
			return {
				show: "pledge",
				backing: "black",
			};
		case modalTypes.BACK_MAHOGANY:
			return {
				show: "pledge",
				backing: "mahogany",
			};
		case modalTypes.BACK_CANCEL:
			return {
				show: "",
			};
		case modalTypes.BACK_THANKS:
			return {
				show: "thankyou",
				backing: "",
			};
		default:
			return state;
	}
};

export default modalReducer;
