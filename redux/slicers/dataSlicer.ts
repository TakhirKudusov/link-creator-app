import { TDataState, TFilterState } from "../interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TDataState = {
  data: [],
};
const dataSlicer = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlicer.actions;

export default dataSlicer.reducer;
