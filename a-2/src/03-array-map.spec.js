describe('array map', () => {
    it('maps number to its square: that is, the number times itself', function () {
        const array = [0, 1, 2, 3];
        const expected = [0, 1, 4, 9];
        const received = array.map(number => /* TODO */);
        expect(received).toEqual(expected);
    });
    it('maps string to upper case', function () {
        const array = ['', 'p', 'span', 'DIV', 'Mixed'];
        const expected = ['', 'P', 'SPAN', 'DIV', 'MIXED'];
        const received = array.map(string => /* TODO */);
        expect(received).toEqual(expected);
    });
    it('maps string to lower case', function () {
        const array = ['', 'P', 'SPAN', 'div', 'Mixed'];
        const expected = ['', 'p', 'span', 'div', 'mixed'];
        const received = array.map(string => /* TODO */);
        expect(received).toEqual(expected);
    });
});

describe('toggleCompleted', () => {
    // Pure function treats items array and item objects as immutable data:
    // Given items and id, return array
    // in which the completed property of the item with id has opposite value.
    const toggleCompleted = (items, id) =>
        items.map(item => {
            // TODO
            // if item has id, then return new object with changed property
            // otherwise:
            return item;
        });

    const text0 = 'I done it.';
    const id0 = 13;
    const item0 = {completed: true, id: id0, text: text0};

    const text1 = 'Just do it!';
    const id1 = -17;
    const item1 = {completed: false, id: id1, text: text1};

    const items = [item0, item1];

    it('toggles true value', function () {
        const received = toggleCompleted(items, id0);

        expect(received.length).toBe(items.length);
        expect(received[0]).toEqual({completed: false, id: id0, text: text0});
        expect(received[1]).toBe(items[1]);
    });
    it('toggles false value', function () {
        const received = toggleCompleted(items, id1);

        expect(received.length).toBe(items.length);
        expect(received[0]).toBe(items[0]);
        expect(received[1]).toEqual({completed: true, id: id1, text: text1});
    });
});
