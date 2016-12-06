import React, { Component } from 'react';
import TodoList from './TodoList';
import './TodoApp.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], text: '' };
  }

  handleRemove = ({ id }) => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id),
      text: ''
    }));
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    const buttonStyles = {
      flexBasis: '100px'
    }

    return (
      <div>
        <h3 className="title">TODO</h3>
        <TodoList items={this.state.items} onRemove={this.handleRemove} />
        <form className="form" onSubmit={this.handleSubmit}>
          <input style={{ flexBasis: '100%', padding: '5px' }} onChange={this.handleChange} value={this.state.text} />
          <button style={buttonStyles}>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
