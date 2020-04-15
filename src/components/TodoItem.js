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
            onToggle={props.handleToggle}
            onChange={props.handleChange}
            checked={props.completed}
            onClick={props.handleToggle}
            id={props.id}

            />
          <label>{props.title}</label>
          <button className="destroy"
          onClick={props.handleDelete}/>
          </form>
        </div>
      </li>
    </React.Fragment>
  );
}


export default TodoItem