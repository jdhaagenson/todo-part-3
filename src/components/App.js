import React, { Component } from "react";
import "../index.css";
import {
  Route,
  NavLink
} from "react-router-dom";
import TodoList from "./TodoList.js";
import {connect} from 'react-redux'
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  clearCompletedTodos
} from '../actions'


class App extends Component {
  state = {
    value: "",
    active: this.props.todos.length
  };
  // handleDelete = todoIdToDelete => {
  //   const newTodoList = this.state.todos.filter(
  //     todo => todo.id !== todoIdToDelete);
  //   this.setState({ todos: newTodoList });
  // };

  handleCreate = (event) => {
    if (event.key === 'Enter') {
      this.props.addTodo(event.target.value)
      this.setState({ value: "" });
    }
  };


  handleChange = (event) => {
    this.setState({value: event.target.value});
  };
  handleClearCompleted = (event) => {
    this.props.clearCompletedTodos()
  }

  render(props) {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onKeyDown={this.handleCreate}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </header>
        <Route
          exact
          path="/"
          render={()=>(
            <TodoList
            todos={this.props.todos} />
          )}/>
          <Route
            path="/active"
            render={()=>(
              <TodoList
              todos={this.props.todos.filter(todo=>todo.completed===false)}/>
            )}/>
          <Route
            path="/completed"
            render={()=>(
              <TodoList
                todos={this.props.todos.filter(todo=>todo.completed===true)}/>
            )}/>
        <footer className="footer">
        <span className="todo-count">
          <strong>
            {this.props.todos.filter(todo=>!todo.completed).length}
          </strong>{" "}
          item(s) left
        </span>
          <ul className="filters">
            <li>
              <NavLink exact to="/"activeClassName="selected">All</NavLink>
            </li>
            <li>
              <NavLink exact to="/active"activeClassName="selected">Active</NavLink>
            </li>
            <li>
              <NavLink exact to="/completed"activeClassName="selected">Completed</NavLink>
            </li>
          </ul>
          <button
          onClick={this.handleClearCompleted}
          className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

// function mapStateToProps(state){
//   return{
//     todos:state.todos
//   }
// }
const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  clearCompletedTodos,
  toggleTodo

}


export default connect(
  state=> ({todos:state.todos}),
  mapDispatchToProps
  )(App);
