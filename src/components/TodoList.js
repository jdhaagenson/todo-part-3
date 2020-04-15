import React from 'react';
import TodoItem from './TodoItem.js';
import { connect } from 'react-redux';
import {
  toggleTodo,
  deleteTodo
} from '../actions'

const TodoList = props => {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map(todo => (
          // console.log(todo) &&
          <TodoItem key={todo.id}
          handleToggle={event => props.handleToggle}
          handleChange={event => props.handleChange}
          handleDelete = {event => props.handleDelete}
          title={todo.title}
          completed={todo.completed}
          id={todo.id}
          />
        ))}
      </ul>
    </section>
  );
}

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo
}
export default connect(
  state => ({todos:state.todos}
    ), mapDispatchToProps
  )(TodoList)
// export default TodoList
