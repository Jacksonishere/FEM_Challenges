import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	direction: null,
};

const slidingSlice = createSlice({
	name: "slider",
	initialState,
	reducers: {
		prevClicked(state) {
			state.direction = "prev";
		},
		nextClicked(state) {
			state.direction = "next";
		},
		resetClicked(state) {
			state.direction = null;
		},
	},
});

export const { prevClicked, nextClicked, resetClicked } = slidingSlice.actions;
export default slidingSlice.reducer;
