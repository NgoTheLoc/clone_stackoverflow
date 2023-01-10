import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLogin = false;
    },
    checkLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { login, logout, checkLogin } = userSlice.actions;

export default userSlice.reducer;
