import '../../styles/todo.css'
import {removeTodo, toggleTodo} from "../actions/todosActions";
import {connect} from "react-redux";


function TodoItem (props) {

    const { id, text, completed } = props.todo;

    const onChangeItem = () => {
       props.dispatch(toggleTodo(id));
    }

    const onDelete = () => {
        props.dispatch(removeTodo(id));
    }

    return (
        <li className="todo-item-container">
            <h1 className="header-text-container">item: {text}</h1>
            <small>id: {id}</small>
            <p>completed:
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={onChangeItem}
                />
            </p>
            <button onClick={onDelete}>delete</button>
        </li>
    )

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoItem);
