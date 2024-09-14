import {ADD_TODO, GET_DATA, REMOVE_TODO, TOGGLE_TODO} from "../actions/todosActions";


// const mockTodos = [
//     {
//         id: 1,
//         text: "Learn React",
//         completed: true
//     },
//     {
//         id: 2,
//         text: "Learn JSX",
//         completed: false,
//     },
//     {
//         id: 3,
//         text: "Learn CSS",
//         completed: false,
//     }
// ];

const initialState = {
    todos: []
};

export const todosReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map( (item) => {
                    if(action.payload === item.id){
                        const id = item.id;
                        const text = item.text;
                        const completed = !item.completed;

                        return {id , text , completed};
                    }
                    return item;
                })
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case GET_DATA:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
}
