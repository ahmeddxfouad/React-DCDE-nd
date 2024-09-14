//Actions variables
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const GET_DATA = 'GET_DATA'


//Actions functions
export const addTodo = (todo) => {

    //Make sure that the todo is created correctly
    const newTodo = {
        id: Date.now(),
        text: todo,
        completed: false
    }


    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const loadingInitialData = (todos) => {
    return{
        type: GET_DATA,
        payload: todos
    }
}
