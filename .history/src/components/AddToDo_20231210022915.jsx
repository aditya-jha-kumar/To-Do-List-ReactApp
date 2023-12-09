import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange = (event) => {

  }
  const handleD
  return (
    <div>
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Item" onChange={}/>
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success Kg-button"
            onClick={() => onNewItem("a", "b")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
