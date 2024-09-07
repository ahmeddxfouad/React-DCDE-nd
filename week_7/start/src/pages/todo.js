import {useEffect, useState} from "react";
import TodoList from "../components/TodoList";
import '../styles/todo-page.css'
import {Link} from "react-router-dom";
import {LogoComponent} from "../components/LogoComponent";
import AddTodo from "../components/AddTodo";

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
    const [currentView, setCurrentView] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTodoListItem(mockTodos);
            setIsLoaded(true);
        }, 2000);
    }, []);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            complete: false

        };
        setCurrentView(false)
        setTodoListItem([...todoListItem, newTodo]);

    }

    return (

    <section className='dashboard-page main-page'>
        {/* Search Form */}
        <header className='page-header-container'>
            <h1>Todo List 📌</h1>
            </header>
            {/*<a href="#addTodo" onClick={() => setCurrentView(!currentView)} className="btn add-todo-btn"> Add a new Todo</a>*/}
            <Link onClick={() => setCurrentView(!currentView)} > Add a new Todo</Link>
            {currentView ?
                <div>
                        {/* Add todo form */}
                        {/*<AddTodoForm handleAddTodo={this.handleAddTodo}/>*/}
                        <AddTodo setCurrentView={setCurrentView} addTodo={addTodo}/>
                </div>
                :
                <div>
                    {isLoaded ? (
                        <TodoList
                            todos={todoListItem}
                            setTodos={setTodoListItem}
                            // deleteTodo={this.deleteTodo}
                            // toggleTodo={this.toggleTodo}
                        />
                    ) : (
                        <h2>Loading..</h2>
                    )}
                </div>
            }
        </section>
    )

}
