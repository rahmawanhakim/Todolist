import React from 'react';
import {v4 as uuidv4} from "uuid";

export const Form = ({editTodos ,setEditTodos,inputText,setInputText, setTodos, todos , setFilter}) => {

//Tempat membuat function

const addTextHandler = (event) => {
    console.log (event.target.value);
    setInputText(event.target.value);
}
const submitTodoHandler = (event) => {
    event.preventDefault();  
  
       setTodos ([
        ...todos, 
        {text : inputText, completed  : false, id :uuidv4()},
    ])
    setInputText("")   
    }
    
    
const filterHandler = (event) => {
    setFilter (event.target.value)
}
    return (
        <form>
            <input value={inputText} onChange={addTextHandler} type="text" className="todo-input"></input>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterHandler} name="todos" className="filter-todo">
                    <option value="all">ALL</option>
                    <option value="completed">COMPLETED</option>
                    <option value="uncompleted">UNCOMPLETED</option>
                </select>
            </div>
        </form>
    )
}
