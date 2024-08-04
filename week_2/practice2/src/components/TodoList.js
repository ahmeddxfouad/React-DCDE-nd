import {useEffect, useState} from "react";
import TodoItem from "./TodoItem";


export default function TodoList () {

    const [todoListItem,setTodoListItem] = useState([
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
    ]);

    useEffect(() => {
        alert("The value of the item changed");
    }, [todoListItem]);

    const handleChanges = (id) => {
        const updatedList = todoListItem.map( (item) => {
                if(id === item.id){
                    const id = item.id;
                    const text = item.text;
                    const completed = !item.completed;

                    return {id , text , completed};
                }

                return item;
            });

        setTodoListItem(updatedList);
    }



        return (
            <ol>
                {todoListItem.map((item) => {
                    return(
                        <TodoItem todo={item} key={item.id} handleChanges={handleChanges}  />
                    )
                })}
            </ol>
        );

}
