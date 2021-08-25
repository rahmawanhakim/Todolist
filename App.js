import React, {useState, useEffect} from "react";
import './App.css';
import {Form} from "./components/Form";
import {Todolist} from "./components/Todolist";


function App() {



  const [inputText, setInputText] = useState("");
  const [todos, setTodos]= useState([]);
  const [filter ,setFilter] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  const [editTodos, setEditTodos] = useState(null);


useEffect (() => {
  filteringHandler()
}, [todos,filter]);

const filteringHandler = () => {
  switch(filter){
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
    case 'uncompleted' :
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos)
      break;
  }
}

  return (
    <div className="App">
      <header>
        <h1 className="title">TodoList</h1>
      </header>
     <Form 
     inputText={inputText} 
     setTodos={setTodos} 
     todos={todos} 
     setInputText={setInputText}
     filter={filter}
     setFilter = {setFilter}
     filteredTodos={filteredTodos}
     editTodos={editTodos}
     setEditTodos = {setEditTodos}
     />
     <Todolist 
     filteredTodos={filteredTodos}
     setTodos={setTodos} 
     todos={todos} 
     />
    </div>
  );
}

export default App;
