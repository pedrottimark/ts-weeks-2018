describe('array push', function () {
    const addItem = function (array, item) {
        array.push(item);
    };

    it('adds item to empty array', function () {
        const items = [];
        const item = {
            completed: false,
            id: 1,
            text: 'Just do it!'
        };

        addItem(items, item);

        expect(items).toEqual([item]);
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

        addItem(items, item1);

        expect(items).toEqual([item0, item1]);
    });
});
