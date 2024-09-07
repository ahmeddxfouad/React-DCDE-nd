import TodoItem from "./TodoItem";

export default function TodoList (props) {


    const handleChanges = (id) => {
        const updatedList = props.todos.map( (item) => {
                if(id === item.id){
                    const id = item.id;
                    const text = item.text;
                    const completed = !item.completed;

                    return {id , text , completed};
                }

                return item;
            });

        props.setTodos(updatedList);
    }

        return (
            <section className='todo-section-container'>
                <div className='todo-lists-container'>
                    <ol className='todo-list-container'>
                        {props.todos.map((item) => {
                            return (
                                <TodoItem todo={item} key={item.id} handleChanges={handleChanges}/>
                            )
                        })}
                    </ol>
                </div>
            </section>
);

}
