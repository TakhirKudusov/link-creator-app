import {
  TFormParametersState,
  TOpenModalState,
  TUsernameState,
} from "../interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TFormParametersState = {
  currentPage: 1,
  isLoading: true,
};
const formParametersSlicer = createSlice({
  name: "formParameters",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setCurrentPage, setIsLoading } = formParametersSlicer.actions;

export default formParametersSlicer.reducer;
