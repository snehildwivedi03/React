import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Appname from "./components/Appname";
import PragraphBody from "./components/Paragraph";
import "./App.css";
function App() {
  return (
    <center>
      <Appname></Appname>
      <div className="main-container">
        <PragraphBody></PragraphBody>
      </div>
    </center>
  );
}

export default App;
