import AppName from "./components/Appname";
import AddToDo from "./components/ToDoApp";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddToDo></AddToDo>
      <div className="item-container">
        <ToDoItem1></ToDoItem1>
        <ToDoItem2></ToDoItem2>
      </div>
    </center>
  );
}

export default App;
