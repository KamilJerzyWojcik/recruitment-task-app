import { configureStore } from "@reduxjs/toolkit";
import FactorialSlice from "./FactorialSlice";
import GithubSlice from "./GithubSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    factorial: FactorialSlice,
    github: GithubSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
