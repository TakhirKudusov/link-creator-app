import { TAccessTokenState } from "../interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TAccessTokenState = {
  accessToken: null,
};
const accessTokenSlicer = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    clearAccessToken(state) {
      state.accessToken = null;
    },
  },
});

export const { setAccessToken, clearAccessToken } = accessTokenSlicer.actions;

export default accessTokenSlicer.reducer;
