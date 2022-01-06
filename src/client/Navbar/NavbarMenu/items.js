import { nanoid } from "nanoid";

export const items = [
  {
    id: nanoid(),
    to: "/",
    text: "Main",
  },
  {
    id: nanoid(),
    to: "/create-todo",
    text: "Create ToDo",
  },
  {
    id: nanoid(),
    to: "/todo",
    text: "ToDo",
  },
];
