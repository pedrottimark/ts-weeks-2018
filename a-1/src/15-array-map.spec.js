describe('array map', function () {
    it('maps number to square', function () {
        const array = [0, 1, 2, 3];

        const received = array.map(function (number) {
            // TOOD
        });

        expect(received).not.toBe(array); // because pure
        expect(received).toEqual([0, 1, 4, 9]);
    });
    it('maps truthy-falsey value to true-false value', function () {
        const array = [
            0,
            -0,
            NaN,
            '',
            false,
            null,
            undefined,
            function () {},
            {},
            [],
        ];

        const received = array.map(function (value) {
            // TODO
        });

        expect(received).not.toBe(array); // because pure
        expect(received).toEqual([
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
        ]);
    });
    it('maps string to upper case', function () {
        const array = ['', 'p', 'span', 'DIV', 'Mixed'];

        const received = array.map(function (string) {
            // TODO hint search for a string method on developer.mozilla.org
        });

        expect(received).not.toBe(array); // because pure
        expect(received).toEqual(['', 'P', 'SPAN', 'DIV', 'MIXED']);
    });
    it('maps string to lower case', function () {
        const array = ['', 'P', 'SPAN', 'div', 'Mixed'];

        const received = array.map(function (string) {
            // TODO hint search for a string method on developer.mozilla.org
        });

        expect(received).not.toBe(array); // because pure
        expect(received).toEqual(['', 'p', 'span', 'div', 'mixed']);
    });
    it('maps object to value of its text property', function () {
        const text0 = 'I done it.';
        const text1 = 'Just do it!';
        const text2 = 'To do, or not to do?';
        const items = [
            {completed: true, id: 0, text: text0},
            {completed: false, id: 1, text: text1},
            {id: 2, text: text2},
        ];

        const received = items.map(function (item) {
            // TODO
        });

        expect(received).not.toBe(items); // because pure
        expect(received).toEqual([text0, text1, text2]);
    });
});

describe('toggleCompleted', function () {
    const toggleCompleted = function (items, id) {
        return items.map(function (item) {
            // TODO if item has id, then return new object with changed property
            /*
            if () {

            }
            */
            return item;
        });
    };

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
