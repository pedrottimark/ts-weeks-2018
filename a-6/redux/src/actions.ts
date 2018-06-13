import { Action } from 'redux'

import { Theme, Visibility } from './types'

export enum ActionTypes {
    INITIALIZE_VISIBILITY = 'INITIALIZE_VISIBILITY',
    INCREMENT_VISIBILITY = 'INCREMENT_VISIBILITY',
    SET_THEME = 'SET_THEME'
}

export type Action =
    | InitializeVisibilityAction
    | IncrementVisibilityAction
    | SetThemeAction

interface InitializeVisibilityAction extends Action {
    type: ActionTypes.INITIALIZE_VISIBILITY
    maxOrder: number
    maxOrderVisible: number
}

export type InitializeVisibility = ({ maxOrder, maxOrderVisible }: Visibility) => InitializeVisibilityAction

export const initializeVisibility: InitializeVisibility = ({ maxOrder, maxOrderVisible }) => ({
    maxOrder,
    maxOrderVisible,
    type: ActionTypes.INITIALIZE_VISIBILITY
})

interface IncrementVisibilityAction extends Action {
    type: ActionTypes.INCREMENT_VISIBILITY
}

export type IncrementVisibility = () => IncrementVisibilityAction

export const incrementVisibility: IncrementVisibility = () => ({
    type: ActionTypes.INCREMENT_VISIBILITY
})

export interface SetThemeAction extends Action {
    theme: Theme
    type: ActionTypes.SET_THEME
}

export type SetTheme = (theme: Theme) => SetThemeAction

export const setTheme: SetTheme = theme => ({
    theme,
    type: ActionTypes.SET_THEME
})
