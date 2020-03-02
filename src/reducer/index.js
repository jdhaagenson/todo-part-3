import todosList from '../todos.json';


const initialState = {todos: todosList};
const RootReducer = (state=initialState, action)=> {
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

        default:
            return state
    }
}

export default RootReducer