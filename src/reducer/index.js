import todosList from '../todos.json';


const initialState = {todos: todosList};
const todosReducer = (state=initialState, action)=>{
    switch( action.type ){
        case 'DELETE_TODO':
            const deleteList = state.todos.filter( todo =>{
                if (todo.id === action.payload){
                    return false
                }
                return true
            })
            return {todos:deleteList}

        case 'ADD_TODO':
            return {...state, todos:[...state.todos, action.payload]}

        case 'TOGGLE_TODO':
            const newTodos = state.todos.slice()
            const toggleTodo = newTodos.map(todo => {
                if (todo.id === action.id){
                    return {...todo, completed:!todo.completed}
                }
                return todo;
            })
            return {todos:toggleTodo};

        case 'CLEAR_COMPLETED_TODOS':
            let cleared = state.todos;
            cleared = state.todos.filter(todo => !todo.completed);
            return {todos:cleared};

        default:
            return state
    }
}

export default todosReducer