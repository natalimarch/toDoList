import { useState } from "react";
// import { nanoid } from "nanoid";
import uniqid from "uniqid";
import { initialState } from "./initialState";

import styles from "./ToDoForm.module.css";

const ToDoForm = ({ onSubmit }) => {
  const [data, setData] = useState(initialState);

  const handleChange = ({ target }) => {
    const { type, name, value, checked } = target;
    const newValue = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    setData(initialState);
  };

  const doId = uniqid();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.rowInput}>
        <input
          className={styles.input}
          name="title"
          type="text"
          value={data.title}
          placeholder="Enter text"
          id={doId}
          onChange={handleChange}
        />
        <button className={styles.Btn}>Create task</button>
      </div>
    </form>
  );
};

export default ToDoForm;
