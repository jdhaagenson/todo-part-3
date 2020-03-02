import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import { connect } from 'react-redux';
import {
  toggleTodo,
  deleteTodo
} from '../actions'

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem key={todo.id}
            handleToggle={event => this.props.toggleTodo(todo.id)}
            handleChange={event => this.props.handleChange}
            handleDelete = {event => this.props.deleteTodo(todo.id)}
            title={todo.title}
            completed={todo.completed}
            />
          ))}
        </ul>
      </section>
    );
  }
}

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo
}
export default connect(null,mapDispatchToProps)(TodoList)
