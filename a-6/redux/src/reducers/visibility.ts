import { Action, ActionTypes } from '../actions'
import { Visibility } from '../types'

const stateInitial: Visibility = {
    maxOrder: 0,
    maxOrderVisible: 0
}

export default (state: Visibility = stateInitial, action: Action) => {
    switch (action.type) {
        case ActionTypes.INITIALIZE_VISIBILITY:
            return {
                ...state,
                maxOrder: action.maxOrder,
                maxOrderVisible: action.maxOrderVisible
            }
        case ActionTypes.INCREMENT_VISIBILITY:
            return {
                ...state,
                maxOrderVisible: (state.maxOrderVisible + 1) % (state.maxOrder + 1)
            }
        default:
            return state
    }
}
