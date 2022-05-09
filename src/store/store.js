import { configureStore } from "@reduxjs/toolkit";
import FactorialSlice from "./FactorialSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    factorial: FactorialSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
