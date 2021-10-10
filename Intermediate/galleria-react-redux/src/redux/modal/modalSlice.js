import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	show: false,
	showImage: "",
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		toggleModal(state, action) {
			state.show = true;
			state.showImage = action.payload;
		},
		untoggleModal(state) {
			state.show = false;
		},
	},
});

export const { toggleModal, untoggleModal } = modalSlice.actions;
export default modalSlice.reducer;
