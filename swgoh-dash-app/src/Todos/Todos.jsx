// Imports
import React, {useState} from "react";
// useState is a react Hook, used to save state for users.
import AddTodos from "./AddTodos";





// Component(Arrow Functions)
const Todos = () => {
    const [todos, setTodos] = useState([]);

    return (
        // Fragment so we dont have to use a bunch of divs
       <>
            <header>
                <h1>Testing Again...</h1>
            </header>   

            <AddTodos todos={todos} setTodos={setTodos} />    

            <ul>
                {todos.map(todo => (
                    <li>{todo}</li>
                ))}
                </ul>            
       </> 
    );
}

// Export Function/Component
export default Todos;