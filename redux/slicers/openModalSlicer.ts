import { TOpenModalState, TUsernameState } from "../interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TOpenModalState = {
  isOpen: false,
};
const openModalSlicer = createSlice({
  name: "openModal",
  initialState,
  reducers: {
    setOpen(state) {
      state.isOpen = true;
    },
    setClose(state) {
      state.isOpen = false;
    },
  },
});

export const { setOpen, setClose } = openModalSlicer.actions;

export default openModalSlicer.reducer;
