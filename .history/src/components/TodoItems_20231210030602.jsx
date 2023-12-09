import ToDoItem from "./ToDoItem";
const TodoItems = ({ todoItems, handleDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <ToDoItem
          key="item"
          todoDate={item.dueDate}
          todoName={item.name}
          onD
        ></ToDoItem>
      ))}
    </div>
  );
};
export default TodoItems;
