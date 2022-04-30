import React, { Component } from 'react';
import './App.css';

class Myheader extends Component {
  render() {
    return (
      <header>
        <h1 className='logo'>{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </header>
    );
  }
}

class Mynav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="">HTML</a></li>
          <li><a href="">CSS</a></li>
          <li><a href="">Javascript</a></li>
        </ul>
      </nav>
    );
  }
}

class Myarticle extends Component {
  render() {
    return (
      <section>
        <article>
          <h2>HTML</h2>
          <p>Hypertext Markup Language</p>
        </article>
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Myheader title="React" desc="Todo list"></Myheader>
        <Mynav></Mynav>
        <Myarticle></Myarticle>
      </div>
    )
  }
}

export default App;