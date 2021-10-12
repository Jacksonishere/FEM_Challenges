import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	planet: "Mercury",
};

const planetSlice = createSlice({
	name: "planet",
	initialState,
	reducers: {
		setPlanet(state, action) {
			state.planet = action.payload;
		},
	},
});

export const { setPlanet } = planetSlice.actions;
export default planetSlice.reducer;
