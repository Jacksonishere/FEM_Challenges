import { configureStore } from "@reduxjs/toolkit";

//Slices
import slidingReducer from "./slider/slidingSlice";
import modalReducer from "./modal/modalSlice";

export const store = configureStore({
	reducer: {
		slider: slidingReducer,
		modal: modalReducer,
	},
});
