import { connect } from "react-redux";
import TodoList from '../components/TodoList'
import {
    toggleTodo,
    addTodo,
    clearCompletedTodos,
    deleteTodo,
} from '../actions'

const mapStateToProps = state => {
    return {
        todos: state.todos,
        value: state.value,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleCreate : () => dispatch( addTodo() ),
        handleClearClick : () => dispatch( clearCompletedTodos() ),
        handleDelete : () => dispatch( deleteTodo() ),
        handleToggle : () => dispatch( toggleTodo() ),
    }
}

const TodoContainer = connect( mapStateToProps, mapDispatchToProps) (TodoList)
export default TodoContainer