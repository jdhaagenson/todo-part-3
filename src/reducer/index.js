import todosList from '../todos.json';


const initialState = {todos: todosList};
export default function RootReducer (state=initialState, action){
    switch( action.type ){
        case 'DELETE_TODO':
            return {todos:action.payload}

        case 'ADD_TODO':
            return {...state, todos:[...state.todos, action.payload]}

        case 'TOGGLE_TODO':
            const toggleTodo = state.todos.map(todo => {
                if (todo.id === action.id){
                    const newTodo = {
                        ...state.todos,
                        completed: !todo.completed
                    }
                    return newTodo;
                }
                return todo;
            })
            return {...state, todos: [...state.todos, toggleTodo]}

        case 'CLEAR_COMPLETED_TODOS':
            let cleared = state.todos;
            cleared = state.todos.filter(a => !a.completed);
            return {...state, todos:[...state.todos, cleared]}

        default:
            return state
    }
}

