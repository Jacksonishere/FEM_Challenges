import * as progressTypes from "./progressTypes";

const initialState = {
	total: 35000,
	backers: 3500,
};

const progressReducer = (state = initialState, action) => {
	switch (action.type) {
		case progressTypes.UPDATE_PROGRESS:
			return {
				total: state.total + action.amount,
				backers: state.backers + 1,
			};

		default:
			return state;
	}
};

export default progressReducer;
