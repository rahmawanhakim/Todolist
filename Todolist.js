import React from 'react';
import {Todo} from "./Todo"

export const Todolist = ({filteredTodos, setTodos, todos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo todo={todo} setTodos={setTodos} todos={todos} text={todo.text} key={todo.id} />
                ))}
            </ul>
        </div>
    )
}
