import * as progressTypes from "./progressTypes";

const initialState = {
	numTotal: 35000,
	numBackers: 3500,
};

const progressReducer = (state = initialState, action) => {
	switch (action.type) {
		case progressTypes.UPDATE_PROGRESS:
			return {
				numTotal: state.numTotal + action.amount,
				numBackers: state.numBackers + 1,
			};
		default:
			return state;
	}
};

export default progressReducer;
