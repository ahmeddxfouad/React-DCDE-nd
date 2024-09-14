import {REMOVE_TODO} from "../actions/todosActions";


export const validation = (store) => (next) => (action) => {

    if(action.type === REMOVE_TODO && store.getState().todos){
        alert('You cannot perform this action!')
    }
    else {
        return next(action);
    }
}
