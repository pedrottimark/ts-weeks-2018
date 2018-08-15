import * as React from 'react'
import './App.css'

import Header from './Header'
import Main from './Main'

class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Header />
                <Main />
            </React.Fragment>
        )
    }
}

export default App
