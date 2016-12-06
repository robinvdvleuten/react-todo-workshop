const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.todo] };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.todo.id) };
    default:
      return state;
  }
}

export default todos;
