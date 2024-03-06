function AddToDo() {
  return (
    <div className="container ">
      <div className="row my-row">
        <div className="col-4">
          <input type="text" placeholder="Enter to do here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success mybtn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
