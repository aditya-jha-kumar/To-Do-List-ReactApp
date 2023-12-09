import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import WelcomeMessage from "./components/WelcomeMessage";
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
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added : ${itemName}, Date : ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  return (
    <div>
      <AppName></AppName>
      <AddToDo onNewItem={handleNewItem}></AddToDo>
      {todoItems.length >== 0 <WelcomeMessage ></WelcomeMessage>}
      <TodoItems todoItems={todoItems}></TodoItems>
    </div>
  );
}
export default App;
