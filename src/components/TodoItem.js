import React from 'react'

class TodoItem extends React.Component{
    
    render(){
        const {completed, id, title} = this.props.todo;
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.5,
            textDecoration: "line-through",
        }

        return (
            <li className="todo-item" >
                <input type="checkbox" 
                checked={completed}
                onChange={() => this.props.handleChangeProps(id)} /> 
                <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
                <span style={completed ? completedStyle : null}>{title}</span>
            </li>
        )
    }
}

export default TodoItem