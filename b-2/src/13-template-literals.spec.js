describe('pluralize nouns', () => {
    // Given number, singular noun stem, and plural suffix,
    // return phrase for that number of the noun or nouns.
    const pluralize = (number, stem, suffix = 's') =>
        `${number} ${stem}${number === 1 ? '' : suffix}`

    test('1 singular', () => {
        const received = pluralize(1, 'thing')
        const expected = '1 thing'
        expect(received).toBe(expected)
    })
    test('0 plural', () => {
        const received = pluralize(0, 'thing')
        const expected = '0 things'
        expect(received).toBe(expected)
    })
    test('2 plural with default pluralizer', () => {
        const received = pluralize(2, 'thing')
        const expected = '2 things'
        expect(received).toBe(expected)
    })
    test('3 plural with empty pluralizer', () => {
        const received = pluralize(3, 'sheep', '')
        const expected = '3 sheep'
        expect(received).toBe(expected)
    })
    test('2 plural with non-empty pluralizer', () => {
        const received = pluralize(2, 'ox', 'en')
        const expected = '2 oxen'
        expect(received).toBe(expected)
    })
    test('1.5 real number with non-empty pluralizer', () => {
        const received = pluralize(1.5, 'inch', 'es')
        const expected = '1.5 inches'
        expect(received).toBe(expected)
    })
})
