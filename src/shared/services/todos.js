import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export const fetchAllList = async () => {
  const { data } = await instance.get("/?_page=1");
  return data;
};

export const fetchAddList = async (newEl) => {
  const { data } = await instance.post("/", newEl);
  return data;
};

export const fetchRemoveList = async (id) => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};

export const fetchEditList = async (updateEl) => {
  const { data } = await instance.put(`/${updateEl.id}`, updateEl);
  return data;
};

export default {
  fetchAllList,
  fetchAddList,
  fetchRemoveList,
  fetchEditList,
};
