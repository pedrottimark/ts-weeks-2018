import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { reducer as form } from 'redux-form'

import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'

const reducer = combineReducers({ form })
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
)
