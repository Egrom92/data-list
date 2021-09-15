import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./list";
import postReducer from "./post";

const store = configureStore({
  reducer: {
    list: listReducer,
    post: postReducer
  }
});

export default store;
