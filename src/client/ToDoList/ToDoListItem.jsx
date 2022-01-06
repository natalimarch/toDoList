import { useState } from "react";
import styles from "./ToDoList.module.css";

const ToDoListItem = ({ userId, completed, id, onDelete, title, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const toggleEdit = () => {
    if (edit) {
      onEdit({ userId, completed, id, title: newTitle });
    }
    setEdit(!edit);
  };

  const handleChange = ({ target }) => {
    setNewTitle(target.value);
  };

  return (
    <li className={styles.item}>
      <span onClick={() => onDelete(id)} className={styles.remove}>
        X
      </span>
      <span onClick={toggleEdit} className={styles.edit}>
        {edit ? "save change" : "change"}
      </span>
      {!edit ? (
        <h4 className={styles.title}>{title}</h4>
      ) : (
        <input
          className={styles.changeInput}
          type="text"
          value={newTitle}
          onChange={handleChange}
        />
      )}
    </li>
  );
};

export default ToDoListItem;
