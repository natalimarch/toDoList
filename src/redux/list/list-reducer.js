import { createReducer, combineReducers } from "@reduxjs/toolkit";

import actions from "./list-actions";

const itemsReducer = createReducer([], {
  [actions.getListSuccess]: (_, { payload }) => payload,
  [actions.addListSuccess]: (store, { payload }) => {
    store.push(payload);
  },
  [actions.removeListSuccess]: (store, { payload }) => {
    const idx = store.findIndex(({ id }) => id === payload);
    store.splice(idx, 1);
  },
  [actions.updateListSuccess]: (store, { payload }) => {
    const idx = store.findIndex((item) => item.id === payload.id);
    store[idx] = payload;
  },
});

const loadingReducer = createReducer(false, {
  [actions.getListRequest]: () => true,
  [actions.getListSuccess]: () => false,
  [actions.getListError]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.getListSuccess]: () => null,
  [actions.getListError]: (_, { payload }) => payload,
});

const listReducer = combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default listReducer;
