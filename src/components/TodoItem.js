import React from 'react';



const TodoItem = props => {
  // console.log(props)
  return (
    <React.Fragment key={props.id}>
      <li className={props.completed ? "completed" : ""}>
        <div className="view">
          <form>
          <input
            className="toggle"
            type="checkbox"
            onToggle={props.toggleTodo}
            onChange={props.handleChange}
            checked={props.completed}
            onClick={(event)=>props.toggleTodo(event, props.id)}
            id={props.id}

            />
          <label>{props.title}</label>
          <button className="destroy"
          onClick={(event)=>props.deleteTodo(event, props.id)}/>
          </form>
        </div>
      </li>
    </React.Fragment>
  );
}


export default TodoItem