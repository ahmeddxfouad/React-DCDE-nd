import {useEffect, useState} from "react";
import TodoList from "../components/todos/TodoList";
import '../styles/todo-page.css'
import '../styles/add-todo-form.css'
import AddTodoItem from "../components/todos/AddTodoItem";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addTodo, loadingInitialData, removeTodo} from "../components/actions/todosActions";

const mockTodos = [
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

function TodoPage (props) {

    const [isLoaded,setIsLoaded] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            props.dispatch(loadingInitialData(mockTodos));
            setIsLoaded(true);
        }, 2000);
    }, []);


    return (
        <section className='dashboard-page main-page'>
            {/* Search Form */}
            <header className='page-header-container'>
                <h1>Todo List 📌</h1>
            </header>
            {/* Add todo form */}

            {isEdit ?
                <AddTodoItem setIsEdit={setIsEdit}/>
                :
                <section>
                    <div className="todo-item-container add-btn" onClick={() => setIsEdit(true)}>
                        <Link to="/todos" > Add Todo Item</Link>
                    </div>
                        {isLoaded ? (
                        <TodoList  />
                    ) : (
                        <h2>Loading..</h2>
                    )}
                </section>
            }
        </section>
    )

}

const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
}

export default connect(mapStateToProps)(TodoPage);

