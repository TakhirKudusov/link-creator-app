import { TUsernameState } from "../interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TUsernameState = {
  username: null,
};
const usernameSlicer = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    clearUsername(state) {
      state.username = null;
    },
  },
});

export const { setUsername, clearUsername } = usernameSlicer.actions;

export default usernameSlicer.reducer;
