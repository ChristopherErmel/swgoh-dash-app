// Imports
import React, {useState} from "react";


// Component(Arrow Functions) Props, used to pass data on.
const AddTodos = props => {

    // console.log(props);

   // useState will grab the values and put them in the state and setState variables. We need setInputs to garentee it will stay between updates.
   const [state, setState] = useState({});

    const {todos, setTodos } = props;

   // take value and add to state
   const handleChange = event => {
       // This will make it so it is only called once
       event.persist();
       // set state
       setState({
           // spread the values, take key and value and auto fill
           ...state,
           // key = value
           [event.target.name]: event.target.value
       });
   };

   
   const handleSubmit = event => {
       // This will make it so it is only called once
       event.preventDefault();

       setTodos([
           ...todos,
           state.todo
       ]);

   }

    return (
        // Fragment so we dont have to use a bunch of divs
       <>
           <form>  
                <div className="form-group">
                    <label>ToDo Item: </label>
                    <input 
                        name="todo" 
                        className="form-control"
                        onChange={handleChange}
                    ></input>
                </div>
                <button 
                    className="btn btn-primary" 
                    type="button"
                    onClick={handleSubmit}
                >Add</button>
            </form>     
       </> 
    );
}

// Export Function/Component
export default AddTodos;