import React from "react";
import './TodoListItem.css';

const TodoListItem = ({todo, onRemovePress, onCompletedPress}, key) => {
    return (
        <div className="todo-item-container" key={key}>
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                {
                todo.isCompleted
                ? null
                : <button 
                    className="completed-button"
                    onClick={() => onCompletedPress(todo.text)}
                  >Mark as Completed</button>
                }
                
                <button 
                    className="remove-button"
                    onClick = {() => onRemovePress(todo.text)}
                >Remove</button>
            </div>
        </div>
    )
}

export default TodoListItem;