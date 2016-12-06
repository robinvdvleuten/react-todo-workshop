import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../actions';
import TodoApp from '../components/TodoApp';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    removeTodo: todo => dispatch(removeTodo(todo))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
