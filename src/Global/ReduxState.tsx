import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../Interface/interface";

const initialState = {
  loginUser: {} as userData | null,
};

const ReduxState = createSlice({
  name: "users",
  initialState,
  reducers: {
    adminLogin: (state, action) => {
      state.loginUser = action.payload;
    },
    adminLogout: (state) => {
      state.loginUser = null;
    },
  },
});

export const { adminLogin, adminLogout } = ReduxState.actions;

export default ReduxState.reducer;
