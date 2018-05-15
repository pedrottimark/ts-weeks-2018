describe('pluralize nouns', () => {
    const pluralize = (number, noun, pluralizer = 's') =>
        `${number} ${noun}${number === 1 ? '' : pluralizer}`;

    test('singular', () => {
        const received = pluralize(1, 'thing');
        const expected = '1 thing';
        expect(received).toBe(expected);
    });
    test('zero', () => {
        const received = pluralize(0, 'thing');
        const expected = '0 things';
        expect(received).toBe(expected);
    });
    test('plural with default pluralizer', () => {
        const received = pluralize(2, 'thing');
        const expected = '2 things';
        expect(received).toBe(expected);
    });
    test('plural with empty pluralizer', () => {
        const received = pluralize(3, 'sheep', '');
        const expected = '3 sheep';
        expect(received).toBe(expected);
    });
    test('plural with non-empty pluralizer', () => {
        const received = pluralize(2, 'ox', 'en');
        const expected = '2 oxen';
        expect(received).toBe(expected);
    });
    test('real number with non-empty pluralizer', () => {
        const received = pluralize(1.5, 'inch', 'es');
        const expected = '1.5 inches';
        expect(received).toBe(expected);
    });
});
