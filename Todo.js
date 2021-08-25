import React from 'react'

export const Todo = ({editTodos, setEditTodos, text, todos, setTodos, todo}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return{
                ...item , completed : !item.completed
                }
            }
            return item;
        }))
    }

    const editHandler = () => {
        const findTodo = todos.find((element) => element.id === todo.id) 
        setEditTodos(findTodo);
        console.log(findTodo)
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}` }>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={editHandler} className="edit-btn">
                <i className="fa fa-edit"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div> 
    )
}
