import { configureStore } from "@reduxjs/toolkit";

import listReducer from "./list/list-reducer";

const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export default store;
