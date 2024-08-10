
import '../styles/todo.css'


export default function TodoItem (props) {

    const { id, text, completed } = props.todo;
    const onChangeItem = () => {
        props.handleChanges(props.todo.id);
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
            </li>
        )


}
