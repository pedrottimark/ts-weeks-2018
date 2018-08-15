import { Action, ActionTypes } from '../actions'

const stateInitial = 0

export default (state: number = stateInitial, action: Action) => {
    switch (action.type) {
        default:
            return state
    }
}
