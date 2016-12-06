import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './containers/TodoApp';
import todoApp from './reducers';
import './index.css';

const store = createStore(todoApp);

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
