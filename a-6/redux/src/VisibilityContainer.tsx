import * as React from 'react'
import { connect } from 'react-redux'

import { AppState, Child } from './types'

type Props = {
    children: Child | Child[]
    maxOrderVisible: number
    order: number
}

const VisibilityContainer = ({ children, maxOrderVisible, order }: Props) => (
    <div style={{ visibility: order <= maxOrderVisible ? 'visible' : 'hidden' }}>{children}</div>
)

// A connected component subscribes to relevant parts of state in the Redux store.
const mapStateToProps = ({ visibility: { maxOrderVisible } }: AppState) => ({
    maxOrderVisible
})

export default connect(mapStateToProps)(VisibilityContainer)
