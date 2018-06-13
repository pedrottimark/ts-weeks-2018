import * as React from 'react'
import { connect } from 'react-redux'

import {
    incrementVisibility,
    IncrementVisibility
} from './actions'
import { AppState, Visibility } from './types'

const arrowLeft = '<\u2013' // endash
const arrowRight = '+>'

type DispatchProps = {
    incrementVisibility: IncrementVisibility
}

type Props = Visibility & DispatchProps

const VisibilityFieldset = (props: Props) => (
    <fieldset className="visibility">
        <label>visibility:</label>
        <button title="decrement">
            {arrowLeft}
        </button>
        <span>{`${props.maxOrderVisible} / ${props.maxOrder}`}</span>
        <button title="increment" onClick={props.incrementVisibility}>
            {arrowRight}
        </button>
    </fieldset>
)

// A connected component subscribes to relevant parts of state in the Redux store.
const mapStateToProps = ({ visibility: { maxOrder, maxOrderVisible } }: AppState): Visibility => ({
    maxOrder,
    maxOrderVisible
})

const mapDispatchToProps: DispatchProps = {
    incrementVisibility
}

export default connect<Visibility, DispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(VisibilityFieldset)
