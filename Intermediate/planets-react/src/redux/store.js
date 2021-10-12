import { configureStore } from "@reduxjs/toolkit";

//Slices
import planetReducer from "./planet/planetSlice";

export const store = configureStore({
	reducer: {
		planet: planetReducer,
	},
});
