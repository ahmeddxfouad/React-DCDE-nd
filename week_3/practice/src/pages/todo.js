import {useEffect, useState} from "react";
import TodoList from "../components/TodoList";
import '../styles/todo-page.css'
import '../styles/add-todo-form.css'
import AddTodoItem from "../components/AddTodoItem";
import {Link} from "react-router-dom";

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

export const TodoPage = () => {

    const [todoListItem,setTodoListItem] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTodoListItem(mockTodos);
            setIsLoaded(true);
        }, 2000);
    }, []);

    const addTodoItem = (value) => {
        const newTodo = {
            id: Date.now(),
            text: value,
            completed: false
        }

        setTodoListItem([...todoListItem, newTodo]);
    }

    const deleteTodoItem = (id) => {
        const newTodoList = todoListItem.filter((item) => item.id !== id);
        console.log("New todo list: ", newTodoList);
        setTodoListItem(newTodoList);
    }

    return (
        <section className='dashboard-page main-page'>
            {/* Search Form */}
            <header className='page-header-container'>
                <h1>Todo List 📌</h1>
            </header>
            {/* Add todo form */}

            {isEdit ?
                <AddTodoItem setIsEdit={setIsEdit} addTodoItem={addTodoItem}/>
                :
                <section>
                    <div className="todo-item-container add-btn" onClick={() => setIsEdit(true)}>
                        <Link to="/todos" > Add Todo Item</Link>
                    </div>
                        {isLoaded ? (
                        <TodoList
                            todos={todoListItem}
                            setTodos={setTodoListItem}
                            deleteTodoItem = {deleteTodoItem}
                        />
                    ) : (
                        <h2>Loading..</h2>
                    )}
                </section>
            }
        </section>
    )

}
