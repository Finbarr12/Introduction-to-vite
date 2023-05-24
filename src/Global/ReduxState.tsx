import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../Interface/interface";

const initialState = {
  loginUser: {} as userData | null,
  allProducts: [],
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
    allProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { adminLogin, adminLogout, allProducts } = ReduxState.actions;

export default ReduxState.reducer;
