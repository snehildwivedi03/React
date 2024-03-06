import ToDoItem from "./ToDoItem";
const TodoItems = ({ todoItmes }) => {
  return (
    <>
      {todoItmes.map((item) => (
        <ToDoItem todoname={item.name} tododate={item.dueDate}></ToDoItem>
      ))}
      <div className="item-container"></div>
    </>
  );
};

export default TodoItems;
