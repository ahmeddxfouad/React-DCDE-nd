import {useState} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addTodo} from "../actions/todosActions";


function AddTodoItem (props) {

    const [inputValue, setInputValue] = useState('');


    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = () => {
        props.dispatch(addTodo(inputValue));
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

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(AddTodoItem);
