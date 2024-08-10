import {useState} from "react";
import {Link} from "react-router-dom";


export default function AddTodoItem (props) {

    const [inputValue, setInputValue] = useState('');


    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = () => {
        props.addTodoItem(inputValue);
        props.setIsEdit(false);
    }

    return (
        <section>
            <h2>Add todo Item here: </h2>
            <br/>
                <Link to="/todos" onClick={() => props.setIsEdit(false)}>Go Back</Link>
            <br/>
            <input type="text" value={inputValue} onChange={handleInputValue} />
            <button className="btn add-todo-btn" onClick={onSubmit}> Add </button>
        </section>
    )
}
