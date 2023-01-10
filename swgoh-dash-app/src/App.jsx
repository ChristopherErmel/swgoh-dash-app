// Imports
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Todos from "./Todos/Todos";
import AddTodos from "./Todos/AddTodos";

// Component(Arrow Functions)
const App = () => {
    return (
        <div className="container">
            <Todos/>
        </div>
    );
}

// Export Function/Component
export default App;