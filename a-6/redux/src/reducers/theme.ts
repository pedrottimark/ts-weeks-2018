import { Action, ActionTypes } from '../actions'
import { Theme } from '../types'

const stateInitial: Theme = { className: '' }

export default (state: Theme = stateInitial, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_THEME:
            return action.theme
        default:
            return state
    }
}
