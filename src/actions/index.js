const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const CHANGE_TODO = 'CHANGE_TODO';
const CLEAR_CLICK = 'CLEAR_CLICK';

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
        payload: todoIdToToggle
    };
};

export const clearCompleted =() =>{
    return {
        type:CLEAR_CLICK
    }
}

export const deleteTodo = (todoIdToDelete)=> {
    return {
        type: DELETE_TODO,
        payload: todoIdToDelete
    }
}

export const changeTodo = (todoToChange) => {
    return {
        type : CHANGE_TODO,
        payload: todoToChange
    }
}