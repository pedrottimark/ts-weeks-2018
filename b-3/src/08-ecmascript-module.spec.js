const numerizer = require('./06-commonjs-module')

describe('CommonJS module', () => {
    describe('suffix s', () => {
        const numerize = numerizer({
            singular: 'thing',
            suffix: 's'
        })
        test('1 singular', () => {
            const received = numerize(1)
            const expected = '1 thing'
            expect(received).toBe(expected)
        })
        test('0 plural', () => {
            const received = numerize(0)
            const expected = '0 things'
            expect(received).toBe(expected)
        })
        test('2 plural with default pluralizer', () => {
            const received = numerize(2)
            const expected = '2 things'
            expect(received).toBe(expected)
        })
    })
    test('suffix empty string', () => {
        const numerize = numerizer({
            singular: 'sheep',
            suffix: ''
        })
        const received = numerize(3)
        const expected = '3 sheep'
        expect(received).toBe(expected)
    })
    test('suffix en', () => {
        const numerize = numerizer({
            singular: 'ox',
            suffix: 'en'
        })
        const received = numerize(2)
        const expected = '2 oxen'
        expect(received).toBe(expected)
    })
    test('1.5 real number with with suffix es', () => {
        const numerize = numerizer({
            singular: 'inch',
            suffix: 'es'
        })
        const received = numerize(1.5)
        const expected = '1.5 inches'
        expect(received).toBe(expected)
    })
    describe('plural geese', () => {
        const numerize = numerizer({
            singular: 'goose',
            plural: 'geese'
        })
        test('singular', () => {
            const received = numerize(1)
            const expected = '1 goose'
            expect(received).toBe(expected)
        })
        test('zero plural', () => {
            const received = numerize(0)
            const expected = '0 geese'
            expect(received).toBe(expected)
        })
        test('non-zero plural', () => {
            const received = numerize(2)
            const expected = '2 geese'
            expect(received).toBe(expected)
        })
    })
})
