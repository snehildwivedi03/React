function ToDoItem2() {
  let todoname2 = "Buy Milk";
  let tododate2 = "12/03/2024";
  return (
    <div className="container my-row">
      <div className="row">
        <div className="col-4">{todoname2}</div>
        <div className="col-4">{tododate2}</div>
        <div className="col-2 ">
          <button type="button" className="btn btn-danger mybtn ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem2;
