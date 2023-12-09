import ToDoItem from "./ToDoItem";
const TodoItems = ({ todoItems, onDe }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <ToDoItem
          key="item"
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={}
        ></ToDoItem>
      ))}
    </div>
  );
};
export default TodoItems;
