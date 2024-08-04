



export default function TodoItem (props) {

    const { id, text, completed } = props.todo;
    const onChangeItem = () => {
        props.handleChanges(props.todo.id);
    }




        return (
            <li>
                <h1>item: {text}</h1>
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
