import React from 'react'

export default class AddEditTodo extends React.Component{
    

    // constructor(props)
    // {
    //     super(props)
    // }
    state = {
        title:"",
        desc:"",
        deadline:""
    };

    onchangeHandle = e =>{
        // this.setState({
        //     [e.target.name] : e.target.value
        // })
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandle = e =>
    {
        e.preventDefault();
        var newTodo = {
            title: this.state.title,
            completed: false,
            desc: this.state.desc,
            deadline: this.state.deadline
        }

        this.props.addTodoProps(newTodo);
        this.setState({
            title:"",
            desc:"",
            deadline:""
        })
    }

    render(){
        return(
            <div className="row d-none" id="addEditTodo">
                <div className="col-12 mr-auto ml-auto">
                    <div className="text-left"><h3>Create Item</h3></div>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="title" className="col-3 mt-2 text-left">Task name:</label>
                            <div className="col-9">
                                <input className="form-control" type="text" name="title" value={this.state.title} 
                                placeholder="Enter task name" onChange={this.onchangeHandle}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="desc" className="col-3 mt-2 text-left">Description:</label>
                            <div className="col-9">
                                <input className="form-control" type="text" name="desc" value={this.state.desc} 
                                placeholder="Enter description" onChange={this.onchangeHandle}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="deadline" className="col-3 mt-2 text-left">Deadline:</label>
                            <div className="col-9">
                                <input className="form-control" type="text" name="deadline" value={this.state.deadline} 
                                placeholder="Enter deadline" onChange={this.onchangeHandle}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-3"></div>
                            <div className="col-9">
                                <button className="btn btn-success" type="button" onClick={this.submitHandle}>Save</button>
                                <a className="btn btn-link" href="/" >Cancel</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        );
    }
}