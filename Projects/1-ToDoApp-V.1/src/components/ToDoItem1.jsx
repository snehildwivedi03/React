function ToDoItem1() {
  let todoname = "Buy Groceries";
  let tododate = "25/07/2023";
  return (
    <div class="container">
      <div class="row my-row">
        <div class="col-4">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger mybtn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem1;
