import React, { Component } from "react";
import "./App.css";
import Myheader from "./Myheader";
import Mynav from "./Mynav";
import Myarticle from "./Myarticle";

class App extends Component {
  // 여기에 constructor 써야함
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "React", desc: "Todo list" },
      menus: [
        {id: 1, title: 'HTML', desc: 'Hypertext Markup Language'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'Javascript', desc: 'Javascript is for interactive'}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Myheader
          title={this.state.subject.title}
          desc={this.state.subject.desc}
        ></Myheader>
        <Mynav 
          data={this.state.menus}>
        </Mynav>
        <Myarticle 
          title="HTML" 
          desc="Hypertext Markup Language">
        </Myarticle>
      </div>
    );
  }
}

export default App;
