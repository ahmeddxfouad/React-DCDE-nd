import React, { Component } from "react";
import TodoItem from "./TodoItem";


const TodoListItem = [
    {
       id: 1,
       text: "Learn React",
       completed: true
    },
    {
       id: 2,
       text: "Learn JSX",
       completed: false,
    },
    {
       id: 3,
       text: "Learn CSS",
       completed: false,
    }
];

class TodoList extends Component {
    render() {
        return (
         <ol>
            {TodoListItem.map((item) => {
                return(
                    <TodoItem todo={item} key={item.id} />
                )
            })}
        </ol>);
    }
}

export default TodoList;
