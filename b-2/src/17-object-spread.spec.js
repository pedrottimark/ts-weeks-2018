const text0 = 'I done it.'
const id0 = 13
const item0 = {completed: true, id: id0, text: text0}

const text1 = 'Just do it!'
const id1 = -17
const item1 = {completed: false, id: id1, text: text1}

describe('toggleCompleted', () => {
    // Given item, return new item in which completed property has opposite value.
    // TODO rewrite with object spread operator instead of Object.assign method
    const toggleCompleted = (item) => Object.assign({}, item, {completed: !item.completed})

    it('toggles true value', function () {
        const received = toggleCompleted(item0)

        expect(received).not.toBe(item0) // because pure
        expect(received).toEqual({completed: false, id: id0, text: text0})
    })
    it('toggles false value', function () {
        const received = toggleCompleted(item1)

        expect(received).not.toBe(item1) // because pure
        expect(received).toEqual({completed: true, id: id1, text: text1})
    })
})

describe('replaceText', () => {
    // Given item, return new item in which text property has value of second argument.
    // TODO rewrite with object spread operator instead of Object.assign method
    const replaceText = (item, text) => Object.assign({}, item, {text})

    it('replaces text', function () {
        const text = 'I did it.'
        const received = replaceText(item0, text)

        expect(received).not.toBe(item0) // because pure
        expect(received).toEqual({completed: true, id: id0, text})
    })
})
