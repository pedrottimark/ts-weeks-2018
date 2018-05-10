describe('array concat', function () {
    const addItem = function (array, item) {
        return array.concat(item);
    };

    it('adds item to empty array', function () {
        const items = [];
        const item = {
            completed: false,
            id: 1,
            text: 'Just do it!'
        };

        const received = addItem(items, item);

        expect(received).not.toBe(items); // because pure
        expect(received).toEqual([item]);
    });
    it('adds item to non-empty array', function () {
        const item0 = {
            completed: true,
            id: 0,
            text: 'I done it.'
        };
        const items = [item0];
        const item1 = {
            completed: false,
            id: 1,
            text: 'Just do it!'
        };

        const received = addItem(items, item1);

        expect(received).not.toBe(items); // because pure
        expect(received).toEqual([item0, item1]);
    });
});
