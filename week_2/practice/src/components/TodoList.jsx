import React, { Component } from "react";
import TodoItem from "./TodoItem";


class TodoList extends Component {

    state = {
        todoListItem : [
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
        ]
    };

    handleChanges = (id) => {

        this.setState(prevState => ({
            // todoListItem: prevState.todoListItem.map( item => id === item.id ? {...item, completed: !item.completed} : item)
            todoListItem: prevState.todoListItem.map( (item) => {
                if(id === item.id){
                    const id = item.id;
                    const text = item.text;
                    const completed = !item.completed;

                    return {id , text , completed};
                }

                return item;
            })

         }));

    }

    render() {
        return (
         <ol>
            {this.state.todoListItem.map((item) => {
                return(
                    <TodoItem todo={item} key={item.id} handleChanges={this.handleChanges}  />
                )
            })}
        </ol>);
    }
}

export default TodoList;
