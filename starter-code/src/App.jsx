import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FoodBox from "./component/FoodBox";
import foods from "./foods.json";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div class="">
        <FoodBox foods={foods} />
      </div>
    );
  }
}

export default App;
