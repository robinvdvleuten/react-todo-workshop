import React, { Component, PropTypes } from 'react';
import './TodoList.css';

class TodoList extends Component {
  handleRemove = item => e => {
    e.preventDefault();

    this.props.onRemove(item);
  }

  render() {
    return (
      <ul className="list">
        {this.props.items.map(item => (
          <li key={item.id}>
            {item.text} <a href="#" onClick={this.handleRemove(item)}>remove</a>
          </li>
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default TodoList;
