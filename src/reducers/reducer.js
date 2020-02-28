import todosList from '../todos.json';
// import {
//     ADD_TODO,
//     DELETE_TODO,
//     CHANGE_TODO,
//     TOGGLE_TODO,
//     CLEAR_CLICK
// } from '../actions'

const initialState = {todos: todosList, value:""};
const reducer = (state=initialState, action)=> {
    switch( action.type ){
        case 'DELETE_TODO':
            const newTodoList = state.todos.filter(
                todo=> todo.id!==action.payload);
            return {newTodoList}

        case 'ADD_TODO':
            return {...state, todos:[...state.todos, action.payload]}

        case 'TOGGLE_TODO':
            const newTodo = state.todos.map(todo => {
                if (todo.id === action.payload){
                    const newTodo = {
                        ...state.todos,
                        completed: !todo.completed
                    }
                    return newTodo;
                }
                return todo;
            })
            return {newTodo}

        case 'CLEAR_CLICK':
            let cleared = state.todos;
            cleared = state.todos.filter(a => !a.completed);
            return {cleared}

        case 'CHANGE_TODO':
            const val = action.payload
            return {
                ...state.todos,
                value:val
            }

        default:
            return state
    }
}

export default reducer