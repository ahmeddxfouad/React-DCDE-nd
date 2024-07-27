import React from "react";


class TodoItem extends React.Component {
    render() {
        const { id, text, completed } = this.props.todo;
        return (
            <li>
                <h1>item: {text}</h1>
                <small>id: {id}</small>
                {//HW Exercise
                /*
                1. Convert the completed boolean into checkbox.
                2. Once clicked on the checkbox the value change.
                */}
                <p>completed: {completed.toString()}</p>
            </li>
        )
    }
}

export default TodoItem;
