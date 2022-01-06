import api from "../../shared/services/todos";
import actions from "./list-actions";

export const getList = () => {
  const actionFunc = async (dispatch) => {
    dispatch(actions.getListRequest());

    try {
      const data = await api.fetchAllList();
      dispatch(actions.getListSuccess(data));
    } catch (error) {
      dispatch(actions.getListError(error));
    }
  };

  return actionFunc;
};

export const addList = (data) => {
  const actionFunc = async (dispatch, getStore) => {
    const { list } = getStore();
    const result = list.items.find((item) => item.name === data.name);
    if (result) {
    }
    const newToDo = { ...data, userId: 1 };
    dispatch(actions.addListRequest());
    try {
      const newEl = await api.fetchAddList(newToDo);
      dispatch(actions.addListSuccess(newEl));
    } catch (error) {
      dispatch(actions.addListError(error));
    }
  };

  return actionFunc;
};

export const removeList = (id) => {
  const actionFunc = async (dispatch) => {
    dispatch(actions.removeListRequest());
    try {
      const removeEl = await api.fetchRemoveList(id);
      dispatch(actions.removeListSuccess(id));
    } catch (error) {
      dispatch(actions.removeListError(error));
    }
  };

  return actionFunc;
};

export const editList = (data) => {
  const actionFunc = async (dispatch) => {
    dispatch(actions.updateListRequest());
    try {
      const updateEl = await api.fetchEditList(data);
      dispatch(actions.updateListSuccess(updateEl));
    } catch (error) {
      dispatch(actions.updateListError(error));
    }
  };

  return actionFunc;
};

export default {
  getList,
  addList,
  removeList,
  editList,
};
