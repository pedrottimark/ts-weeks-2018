import visibility from './visibility'
import {
    initializeVisibility,
    incrementVisibility,
    // decrementVisibility
} from '../actions'

describe('initializeVisibility', () => {
    const maxOrder = 3
    test('maxOrderVisible is zero', () => {
        const maxOrderVisible = 0
        const expected = {
            maxOrder,
            maxOrderVisible
        }
        const received = visibility(undefined, initializeVisibility(expected))
        expect(received).toEqual(expected)
    })
    test('maxOrderVisible is non-zero', () => {
        const maxOrderVisible = 3
        const expected = {
            maxOrder,
            maxOrderVisible
        }
        const received = visibility(undefined, initializeVisibility(expected))
        expect(received).toEqual(expected)
    })
})

describe('incrementVisibility', () => {
    const maxOrder = 3
    test('from 0 to 1', () => {
        const state = {
            maxOrder,
            maxOrderVisible: 0
        }
        const expected = {
            maxOrder,
            maxOrderVisible: 1
        }
        const received = visibility(state, incrementVisibility())
        expect(received).toEqual(expected)
    })
    test('from 1 to 2', () => {
        const state = {
            maxOrder,
            maxOrderVisible: 1
        }
        const expected = {
            maxOrder,
            maxOrderVisible: 2
        }
        const received = visibility(state, incrementVisibility())
        expect(received).toEqual(expected)
    })
    test('from 2 to 3', () => {
        const state = {
            maxOrder,
            maxOrderVisible: 2
        }
        const expected = {
            maxOrder,
            maxOrderVisible: 3
        }
        const received = visibility(state, incrementVisibility())
        expect(received).toEqual(expected)
    })
    test('from 3 to 0', () => {
        const state = {
            maxOrder,
            maxOrderVisible: 3
        }
        const expected = {
            maxOrder,
            maxOrderVisible: 0
        }
        const received = visibility(state, incrementVisibility())
        expect(received).toEqual(expected)
    })
})

/*
describe('decrementVisibility', () => {
    const maxOrder = 3
    test('from 0 to 3', () => {
        const state = {
            maxOrder,
            maxOrderVisible: 0
        }
        const expected = {
            maxOrder,
            maxOrderVisible: 3
        }
        const received = visibility(state, decrementVisibility())
        expect(received).toEqual(expected)
    })
    test('from 3 to 2', () => {
        const state = {
            maxOrder,
            maxOrderVisible: 3
        }
        const expected = {
            maxOrder,
            maxOrderVisible: 2
        }
        const received = visibility(state, decrementVisibility())
        expect(received).toEqual(expected)
    })
    test('from 2 to 1', () => {
        const state = {
            maxOrder,
            maxOrderVisible: 2
        }
        const expected = {
            maxOrder,
            maxOrderVisible: 1
        }
        const received = visibility(state, decrementVisibility())
        expect(received).toEqual(expected)
    })
    test('from 3 to 0', () => {
        const state = {
            maxOrder,
            maxOrderVisible: 3
        }
        const expected = {
            maxOrder,
            maxOrderVisible: 0
        }
        const received = visibility(state, incrementVisibility())
        expect(received).toEqual(expected)
    })
})
*/
