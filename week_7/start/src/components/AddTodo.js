import {Link} from "react-router-dom";
import {useState} from "react";


export default function AddTodo  (props) {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {

        setInputValue(e.target.value);

    }

    return (
     <div>
        {/* Add todo form */}
        <h1> Create Todo </h1>
         <button>
            <Link to="/todos" onClick={() => props.setCurrentView(false)} >Go Back</Link>
         </button>
         <section>
            <h1> Enter a new Todo Item:</h1>
         <input type="text" value={inputValue} onChange={handleInputChange} required/>
             <button onClick={() => props.addTodo(inputValue)}> Add </button>
         </section>
    </div>
    )
}
