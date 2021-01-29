import React from 'react'
import {Switch, Route} from 'react-router-dom'
import TodoContainer from './components/TodoContainer'
import AddEditTodo from './components/AddEditTodo'

export default function App(){
    return(
        <main>
            <Switch>
                <Route path="/" component={TodoContainer} exact />
                <Route path="/addtodo" component={AddEditTodo} />
            </Switch>
        </main>
    )
}