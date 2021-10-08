import { configureStore } from "@reduxjs/toolkit";
import slidingReducer from "./slider/slidingSlice";

export const store = configureStore({
	reducer: {
		slider: slidingReducer,
	},
});
