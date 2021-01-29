import React from 'react'
import TodosList  from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'
import AddEditTodo from './AddEditTodo'
import {v4 as uuidv4} from 'uuid'

class TodoContainer extends React.Component{
    state = {
        todos: [
          {
            id: uuidv4(),
            title: "Setup development environment",
            completed: true,
            desc: "",
            deadline:""
          },
          {
            id: uuidv4(),
            title: "Develop website and add content",
            completed: false,
            desc: "",
            deadline:""
          },
          {
            id: uuidv4(),
            title: "Deploy to live server",
            completed: false,
            desc: "",
            deadline:""
          }
        ],
        linkText:"Add advance"
       };

    handleChange = (id) => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo =>{
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        })
        
    };

    delTodo = id => {
        this.setState({
            todos: [
             ...this.state.todos.filter(todo => {
                 return todo.id !== id;
             })
            ]
          });
    };

    addTodoItem = todo => {
        const newTodo = {
            id: uuidv4(),
            title: todo.title,
            completed: false,
            desc: todo.desc,
            deadline: todo.deadline
          };
          this.setState({
            todos: [...this.state.todos, newTodo]
          });
    };

    showHideHandle= (e) =>{
        var element = document.querySelector('#addEditTodo');
        var inputElement = document.querySelector('#inputTodo');
        if (element.classList.contains('d-none'))
        {
            element.classList.remove('d-none');
            inputElement.classList.add('d-none');
            this.setState({
                linkText: "Close"
            })
        }
        else{
            element.classList.add('d-none')
            inputElement.classList.remove('d-none');
            this.setState({
                linkText:"Add advance"
            })
        }
    }

    render(){
        return(
            <div className="container">
                <Header />
                <a className="btn btn-link mb-3" href="#" onClick={this.showHideHandle}><strong>{this.state.linkText}</strong></a>
                <AddEditTodo addTodoProps={this.addTodoItem} />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodosList todos={this.state.todos} 
                handleChangeProps={this.handleChange}
                deleteTodoProps={this.delTodo} />
            </div>
        )
    }
}

export default TodoContainer