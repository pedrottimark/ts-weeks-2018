import { changeCount } from '../actions'
import reducer from './index'

describe('reducer', () => {
    it('changes count by arbitrary delta', () => {
        const statePrev = 0
        const delta = -7
        const stateNext = reducer(statePrev, changeCount(delta))
        expect(stateNext).toBe(delta)
    })
    test('reduce method of actions array', () => {
        const stateInitial = 0
        const actions = [
            changeCount(1),
            changeCount(1),
            changeCount(-1)
        ]
        const stateFinal = actions.reduce(reducer, stateInitial)
        expect(stateFinal).toBe(1)
    })
})
