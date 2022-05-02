import React, { Component } from "react";
import "./App.css";
import Myheader from "./Myheader";
import Mynav from "./Mynav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Myheader title="React" desc="Todo list"></Myheader>
        <Mynav></Mynav>
        <Myarticle title="HTML" desc="Hypertext Markup Language"></Myarticle>
      </div>
    );
  }
}

export default App;
