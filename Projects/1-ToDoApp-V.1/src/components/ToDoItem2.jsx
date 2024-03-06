function ToDoItem2() {
  let todoname2 = "Buy Milk";
  let tododate2 = "12/03/2024";
  return (
    <div class="container my-row">
      <div class="row">
        <div class="col-4">{todoname2}</div>
        <div class="col-4">{tododate2}</div>
        <div class="col-2 ">
          <button type="button" class="btn btn-danger mybtn ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem2;
