import ToDoItem from "./ToDoItem";
const TodoItems = ({ todoItems, handleDeleteIte }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <ToDoItem key = "item" todoDate={item.dueDate} todoName={item.name}></ToDoItem>
      ))}
    </div>
  );
};
export default TodoItems;
