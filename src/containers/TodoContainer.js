import { connect } from "react-redux";
import TodoList from '../components/TodoList'
import {
    toggleTodo,
    addTodo,
    clearCompleted,
    deleteTodo,
    changeTodo
} from '../actions'

const mapStateToProps = state => {
    return {todos: state.todos, value: state.value};
};

const mapDispatchToProps = dispatch => {
    return {ADD_TODO : dispatch}
}

const TodoContainer = connect( mapStateToProps, mapDispatchToProps) (TodoList)
export default TodoContainer