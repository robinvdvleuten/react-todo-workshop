import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
