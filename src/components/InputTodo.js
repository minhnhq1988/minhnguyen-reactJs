import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: "",
        desc: ""
    };

    onChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: "",
            desc: ""
          });
      };

    render() {
        return (
        <form onSubmit={this.handleSubmit} className="form-container" >
            <input type="text" placeholder="Add Todo..." name="title" className="input-text" value={this.state.title} onChange={this.onChange} />
            <input type="submit" value="Submit" className="input-submit" />
        </form>
        )
  }
}
export default InputTodo