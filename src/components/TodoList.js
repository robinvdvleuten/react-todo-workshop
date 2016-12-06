import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import './TodoList.css';

class TodoList extends Component {
  handleRemove = todo => e => {
    e.preventDefault();

    this.props.onRemove(todo);
  }

  render() {
    return (
      <ul className="list">
        {this.props.todos.map(todo => (
          <li key={todo.id}>
            {todo.text} <a href="#" onClick={this.handleRemove(todo)}>remove</a>
          </li>
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.instanceOf(List).isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default TodoList;
