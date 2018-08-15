import { Action } from 'redux'

export enum ActionTypes {
    CHANGE_COUNT = 'CHANGE_COUNT'
}

export type Action = ChangeCountAction

interface ChangeCountAction extends Action {
    type: ActionTypes.CHANGE_COUNT
    delta: number
}

export const changeCount = (delta: number): ChangeCountAction => ({
    type: ActionTypes.CHANGE_COUNT,
    delta
})
