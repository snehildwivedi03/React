import AppName from "./components/Appname";
import AddToDo from "./components/ToDoApp";
import TodoItems from "./components/ToDoItems";
import "./App.css";
function App() {
  const todoitemlist = [
    {
      name: "Milk",
      dueDate: "12/12/24",
    },
    {
      name: "Chocolate",
      dueDate: "14/02/25",
    },
    {
      name: "Bike",
      dueDate: "03/02/25",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo></AddToDo>
      <TodoItems todoItmes={todoitemlist}></TodoItems>
    </center>
  );
}

export default App;
