import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../reducers/features/robotsSlice";

const store = configureStore({
  reducer: {
    robots: robotsReducer,
  },
});

export default store;
