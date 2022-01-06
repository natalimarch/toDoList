import { useSelector, useDispatch } from "react-redux";

import ToDoList from "../../client/ToDoList";

import operations from "../../redux/list/list-operations";
import { getAllList } from "../../redux/list/list-selectors";

import styles from "../../client/ToDoList/ToDoList.module.css";

const ToDos = () => {
  const { items, loading, error } = useSelector(getAllList);
  const dispatch = useDispatch();

  const removeList = (id) => {
    dispatch(operations.removeList(id));
  };

  const editList = (data) => {
    dispatch(operations.editList(data));
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {loading && <p>Loading ....</p>}
        {error && <p>Sorry, try later</p>}
        {!loading && !error && (
          <ToDoList
            list={items}
            onDelete={removeList}
            onEdit={editList}
            name="To Do"
          />
        )}
      </div>
    </div>
  );
};

export default ToDos;
