import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import questionsReducer from "./features/questions/questionsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    questions: questionsReducer,
  },
});
