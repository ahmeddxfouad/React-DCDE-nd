import {useEffect, useState} from "react";
import TodoList from "../components/TodoList";
import '../styles/todo-page.css'

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

    useEffect(() => {
        setTimeout(() => {
            setTodoListItem(mockTodos);
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
            {/*<AddTodoForm handleAddTodo={this.handleAddTodo}/>*/}
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
        </section>
    )

}
