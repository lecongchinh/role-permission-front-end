import React from 'react'

import Todos from './todos/todos'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

class App extends React.Component {
    render() {
        return(

            <Router>
                <div>
                    <ul>
                        <li><Link to="/tét">Tét</Link></li>
                        <li><Link to="/b">b</Link></li>
                    </ul>
                </div>
            </Router>

            <div>
                <ul>
                    <li><a href="/todos">todos</a></li>
                    <li><a href="/abc">abc</a></li>
                </ul>
            </div>    
        )
    }
}

export default App;