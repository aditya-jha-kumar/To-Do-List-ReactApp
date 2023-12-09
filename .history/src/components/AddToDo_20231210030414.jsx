import { useState } from "react";
import styles from "./AddToDo.module.css";
function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div>
      <div className={"row kg-row"}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Item"
            onChange={handleNameChange}
            className={styles.index}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handleDateChange}
            className={styles.index}
            value={dueDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className=btn btn-success Kg-button"
            onClick={handleAddButtonClicked}
            
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
