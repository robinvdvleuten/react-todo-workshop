import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import TodoList from './TodoList';
import './TodoApp.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState(prevState => ({
      text: ''
    }));

    this.props.addTodo(newTodo);
  }

  render() {
    const buttonStyles = {
      flexBasis: '100px'
    }

    return (
      <div>
        <h3 className="title">TODO</h3>
        <TodoList todos={this.props.todos} onRemove={this.props.removeTodo} />
        <form className="form" onSubmit={this.handleSubmit}>
          <input style={{ flexBasis: '100%', padding: '5px' }} onChange={this.handleChange} value={this.state.text} />
          <button style={buttonStyles}>{'Add #' + (this.props.todos.size + 1)}</button>
        </form>
      </div>
    );
  }
}

TodoApp.propTypes = {
  todos: PropTypes.instanceOf(List).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
}

export default TodoApp;
