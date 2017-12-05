import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import App from './components/App';
import thunk from 'redux-thunk'

let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);

class Books extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Books;