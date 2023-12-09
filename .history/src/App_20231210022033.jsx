import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "2/10/2023",
    },
    {
      name: "College",
      dueDate: "2/01/2024",
    },
    {
      name: "Trip",
      dueDate: "2/03/2024",
    },
    {
      name: "Lecture",
      dueDate: "6/03/2024",
    },
  ];
  const [toDoItems, setToDoItems] = useState(initialTodoItems);

  return (
    <div>
      <AppName></AppName>
      <AddToDo></AddToDo>
      <TodoItems todoItems={toDoItems}></TodoItems>
    </div>
  );
}
export default App;
