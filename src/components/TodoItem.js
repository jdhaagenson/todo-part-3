import React, {Component} from 'react';
import { connect } from 'react-redux';

class TodoItem extends Component {
    render() {
      return (
        <li className={this.props.todos.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.todos.completed}
              onChange = {this.props.handleToggle}
            />
            <label>{this.props.title}</label>
            <button className="destroy"
            onClick={this.props.handleDelete}/>
          </div>
        </li>
      );
    }
  }

export default TodoItem