import React, { Component } from "react";
import TodoItem from "./TodoItem";

const TodoListItems = [
    {
        id: 1,
        text: 'Learn React',
        completed: false,
    },
    {
        id: 2,
        text: 'Learn JS',
        completed: false,
    },
    {
        id: 3,
        text: 'Learn CSS',
        completed: true,
    }
]

class TodoList extends Component {
    render() {
        return(
            <ul>
                {
                    TodoListItems.map((item) =>(
                            <TodoItem todo={item} key={item.id}/>
                    ))
                }
            </ul>
        )
    }
}

export default TodoList;
