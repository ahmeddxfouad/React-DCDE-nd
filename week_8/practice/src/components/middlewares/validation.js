import {REMOVE_TODO} from "../actions/todosActions";


export const validation = (store) => (next) => (action) => {

    //validation that at least one todo is in the list
    if(action.type === REMOVE_TODO && store.getState().todos.length === 1){
        alert('You cannot perform this action, at least 1 todo should be in the list!');
    }
    else {
        return next(action);
    }
}
