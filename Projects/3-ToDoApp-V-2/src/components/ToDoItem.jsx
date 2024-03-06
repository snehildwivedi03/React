function ToDoItem({ todoname, tododate }) {
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-4">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger mybtn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
