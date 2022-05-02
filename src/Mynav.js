import React, { Component } from "react";

export default class Mynav extends Component {
    render() {
        let lists = [];
        let data = this.props.data;
        for (let i = 0; i < data.length; i++) {
            lists.push(<li key={data[i].id}><a href="">{data[i].title}</a></li>);
        }
    return (
      <nav>
          <ul>
            {lists}
          </ul>
      </nav>
    );
  }
}
