import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: "",
        desc: "",
        deadline:""
    };

    onChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
    };

    handleSubmit = e => {
        e.preventDefault();
        var newTodo = {
            title: this.state.title,
            completed: false,
            desc: this.state.desc,
            deadline: this.state.deadline
        }
        this.props.addTodoProps(newTodo);
        this.setState({
            title: "",
            desc: "",
            deadline:""
          });
      };

    render() {
        return (
        <form onSubmit={this.handleSubmit} id="inputTodo" className="form-container" >
            <input type="text" placeholder="Quickly Add Todo..." name="title" className="input-text" value={this.state.title} onChange={this.onChange} />
            <input type="submit" value="Submit" className="input-submit" />
        </form>
        )
  }
}
export default InputTodo