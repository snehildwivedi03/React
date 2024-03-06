import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components/Appname";
import FoodItem from "./components/FoodItem";

function App() {
  let foodItem = [
    "Dal",
    "Peanuts",
    "Salads",
    "Ghee",
    "Green Vegetables",
    "Oats",
    "Rice",
  ];
  return (
    <>
      <Appname></Appname>
      <FoodItem items={foodItem}></FoodItem>
    </>
  );
}

export default App;
