import uniqid from "uniqid";

export const items = [
  {
    id: uniqid(),
    to: "/",
    text: "Main",
  },
  {
    id: uniqid(),
    to: "/create-todo",
    text: "Create ToDo",
  },
  {
    id: uniqid(),
    to: "/todo",
    text: "ToDo",
  },
];
