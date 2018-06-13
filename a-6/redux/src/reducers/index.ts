import { combineReducers, Reducer } from 'redux'

import theme from './theme'
import visibility from './visibility'

import { AppState } from '../types'

const reducer: Reducer<AppState> = combineReducers({ theme, visibility })

export default reducer
