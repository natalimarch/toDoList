import styles from "./ToDoList.module.css";
import ToDoListItem from "./ToDoListItem";

const toDoList = ({ name, list, onDelete, onEdit }) => {
  const elements = list.map((item) => (
    <ToDoListItem key={item.id} {...item} onDelete={onDelete} onEdit={onEdit} />
  ));

  return (
    <>
      <h3 className={styles.listTitle}>{name}</h3>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default toDoList;
