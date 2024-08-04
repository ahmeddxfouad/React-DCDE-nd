import React from "react";
import propTypes from "prop-types";

class TodoItem extends React.Component {


    onChangeItem = () => {
        this.props.handleChanges(this.props.todo.id);
    }

    render() {
        const { id, text, completed } = this.props.todo;
        return (
            <li>
                <h1>item: {text}</h1>
                <small>id: {id}</small>
                {//HW Exercise
                /*his.props.handleChanges(this.props.todo.id);
                1. Convert the completed boolean into checkbox.
                2. Once clicked on the checkbox the value change.
                */}
                <p>completed:
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={this.onChangeItem}
                />
                </p>
            </li>
        )
    }
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    handleChanges: propTypes.func
}

export default TodoItem;
