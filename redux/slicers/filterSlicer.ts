import { TFilterState } from "../interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TFilterState = {
  filter: "",
};
const filterSlicer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.join("");
      console.log(state.filter);
    },
  },
});

export const { setFilter } = filterSlicer.actions;

export default filterSlicer.reducer;
