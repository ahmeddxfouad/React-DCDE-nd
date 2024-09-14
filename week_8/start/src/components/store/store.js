import {createStore} from 'redux';
import {todosReducer} from "../reducers/todosReducer";
import {enhancer} from "../middlewares";

export const store = createStore(todosReducer, enhancer);
