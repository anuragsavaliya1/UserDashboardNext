import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    users: userReducer,
  },
});

export default store;
