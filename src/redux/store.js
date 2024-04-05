import { configureStore } from "@reduxjs/toolkit";
import Data from "./Slices/Analyst.slice";
const store = configureStore({
  reducer: {
    Data,
  },
});

export default store;
