import { createAction } from "@reduxjs/toolkit";

const getListRequest = createAction("todo/getRequest");
const getListSuccess = createAction("todo/getSuccess");
const getListError = createAction("todo/getError");

const addListRequest = createAction("create-todo/addRequest");
const addListSuccess = createAction("create-todo/addSuccess");
const addListError = createAction("create-todo/addError");

const removeListRequest = createAction("todo/removeRequest");
const removeListSuccess = createAction("todo/removeSuccess");
const removeListError = createAction("todo/removeError");

const updateListRequest = createAction("todo/updateRequest");
const updateListSuccess = createAction("todo/updateSuccess");
const updateListError = createAction("todo/updateError");

export default {
  getListRequest,
  getListSuccess,
  getListError,
  addListRequest,
  addListSuccess,
  addListError,
  removeListRequest,
  removeListSuccess,
  removeListError,
  updateListRequest,
  updateListSuccess,
  updateListError,
};
