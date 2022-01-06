import { useDispatch } from "react-redux";

import operations from "../../redux/list/list-operations";
import ToDoForm from "../../client/ToDoForm";

const CreateToDoForm = () => {
  const dispatch = useDispatch();

  const addList = (data) => {
    dispatch(operations.addList(data));
  };

  return (
    <div>
      <ToDoForm onSubmit={addList} />
    </div>
  );
};

export default CreateToDoForm;
