import * as pledgeTypes from "./pledgeTypes";

const initialState = {
	back: {
		title: "Pledge with no reward",
		desc: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
	},
	bamboo: {
		title: "Bamboo Stand",
		price: 25,
		desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		remaining: 101,
	},
	black: {
		title: "Black Edition Stand",
		price: 75,
		desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		remaining: 64,
	},
	mahogany: {
		title: "Mahogany Special Edition",
		price: 200,
		desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		remaining: 1,
	},
};

const updatePledgeReducer = (state = initialState, action) => {
	switch (action.type) {
		case pledgeTypes.UPDATE_BAMBOO:
			const { bamboo } = state;
			return {
				...state,
				bamboo: { ...bamboo, remaining: bamboo.remaining - 1 },
			};
		case pledgeTypes.UPDATE_BLACK:
			const { black } = state;
			return {
				...state,
				black: { ...black, remaining: black.remaining - 1 },
			};
		case pledgeTypes.UPDATE_MAHOGANY:
			const { mahogany } = state;
			return {
				...state,
				mahogany: { ...mahogany, remaining: mahogany.remaining - 1 },
			};
		default:
			return state;
	}
};

export default updatePledgeReducer;
