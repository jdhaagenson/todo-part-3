import todos from '../todos.json'

export const todolist = (state=[todos], action)=> {
    switch( action.type ){
        case 'DELETE_TODO':
            const newTodoList = state.filter(
                todo=> todo.id!==action.todoIdToDelete);
            return [newTodoList]

            case 'ADD_TODO':
            return [...todos, action.todo]

            case ''

        default:
            return state
    }
}