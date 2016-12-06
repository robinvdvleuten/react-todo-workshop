import { List } from 'immutable';

const initialState = {
  todos: List.of({ id: 1, text: '🍕' }, { id: 2, text: '🍜' }, { id: 3, text: '🍰' })
}

const todos = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: state.todos.push(action.todo) };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.todo.id) };
    default:
      return state;
  }
}

export default todos;
