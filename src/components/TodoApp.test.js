import React from 'react';
import { render } from 'react-dom';
import { shallow } from 'enzyme';
import TodoApp from './TodoApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<TodoApp />, div);
});

it('updates the text in state when typing', () => {
  const todoApp = shallow(<TodoApp />);
  expect(todoApp.state().text).toEqual('');

  todoApp.find('input').simulate('change', { target: { value: 'changed' } });

  expect(todoApp.state().text).toEqual('changed');
});


it('appends a new todo to the items', () => {
  const todoApp = shallow(<TodoApp />);
  expect(todoApp.state().items).toEqual([]);

  todoApp.find('input').simulate('change', { target: { value: 'todo' } });
  todoApp.find('form').simulate('submit', { preventDefault: () => {} });

  expect(todoApp.state().items).toHaveLength(1);
  expect(todoApp.state().items[0].text).toEqual('todo');
  expect(todoApp.state().text).toEqual('');
});
