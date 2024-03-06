function AddToDo() {
  return (
    <div class="container ">
      <div class="row my-row">
        <div class="col-4">
          <input type="text" placeholder="Enter to do here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success mybtn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
