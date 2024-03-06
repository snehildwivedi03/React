function PragraphBody() {
  let currentTime = new Date();
  return (
    <div className="para-container">
      <p className="first-para">
        This is the clock that shows time in Bharat at every time
      </p>
      <p>
        This is the current date: {currentTime.toDateString()}-{" "}
        {currentTime.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default PragraphBody;
