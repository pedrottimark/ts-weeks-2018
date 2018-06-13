import * as React from 'react'
import { connect } from 'react-redux'

import './App.css'
import VisibilityFieldset from './VisibilityFieldset'
import Main from './Main'

import { initializeVisibility, InitializeVisibility, setTheme, SetTheme } from './actions'
import { AppState } from './types'

type DispatchProps = {
    initializeVisibility: InitializeVisibility
    setTheme: SetTheme
}
type ClassName = {
    className: string
}
type Props = ClassName & DispatchProps
type State = {}

class App extends React.Component<Props, State> {
    public componentDidMount() {
        this.props.initializeVisibility({
            maxOrder: 8,
            maxOrderVisible: 0
        })
        this.props.setTheme({
            className: 'teal'
        })
    }
    public render() {
        return (
            <>
                <header>
                    <VisibilityFieldset />
                </header>
                <Main className={this.props.className} />
            </>
        )
    }
}

// A connected component subscribes to relevant parts of state in the Redux store.
const mapStateToProps = ({ theme: { className } }: AppState): ClassName => ({
    className
})

const mapDispatchToProps: DispatchProps = {
    initializeVisibility,
    setTheme
}

export default connect<ClassName, DispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(App)
