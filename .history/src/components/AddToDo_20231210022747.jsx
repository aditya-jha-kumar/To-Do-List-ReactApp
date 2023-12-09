import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState()
  return (
    <div>
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Item" />
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
