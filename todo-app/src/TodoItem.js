import React from 'react'

function TodoItem(props) {
    const completedTodoStyle = {
        fontStyle: "italic",
        textDecoration: "line-through",
        color: "#979797"
    }
    return (
        <div className="todoItem">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                // need callback function with id when event is triggered (event) =>
                onChange={ () => props.handleChange(props.item.id) } 
            /> 
            {/* conditional rendering of inline style */}
            <p style={props.item.completed ? completedTodoStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem

// {
//     props.item.completed ?
//     <p className="todo-completed">{props.item.text}</p> :
//     <p>{props.item.text}</p>
// }