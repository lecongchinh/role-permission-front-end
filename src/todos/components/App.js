import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
// import Notify from '../containers/'
import '../css/index.css'
const App = () => (
    <div className="container todo">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            {/*<Notify />*/}
            <AddTodo />
            <VisibleTodoList />
        </div>
        <div className="col-md-4"></div>
    </div>
);

export default App;