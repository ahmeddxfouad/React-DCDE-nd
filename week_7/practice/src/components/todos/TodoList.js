import {useEffect, useState} from "react";
import TodoItem from "./TodoItem";
import {toggleTodo} from "../actions/todosActions";
import {connect} from "react-redux";


function TodoList (props) {

    return (
        <section className='todo-section-container'>
            <div className='todo-lists-container'>
                <ol className='todo-list-container'>
                    {props.todos.map((item) => {
                        return (
                            <TodoItem todo={item} key={item.id} />
                        )
                    })}
                </ol>
            </div>
        </section>
    );

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)


