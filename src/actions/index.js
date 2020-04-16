const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS';

export const addTodo = (todoTitle)=> {
    const newTodo = {
        userId: 1,
        id:Math.floor(Math.random()*100000),
        title: todoTitle,
        completed: false
    };
    return {
        type: ADD_TODO,
        payload: newTodo
    };
};

export const toggleTodo = (todoIdToToggle) => {
    return {
        type: TOGGLE_TODO,
        id: todoIdToToggle
    };
};

export const clearCompletedTodos =() =>{
    return {
        type:CLEAR_COMPLETED_TODOS
    }
}

export const deleteTodo = (todoToDelete)=> {
    return ({
        type: DELETE_TODO,
        payload: todoToDelete
    })
}

