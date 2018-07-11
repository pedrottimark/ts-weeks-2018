describe('deleteItem', function () {
    // Given an array and an index, such that 0 <= index and index < array.length,
    // return a new array that consists of all items except the item at the index.
    const deleteItem = function (array, index) {
        return array.filter(function (item, i) {
            // TODO
        })
    };

    it('deletes the only item', function () {
        const items = [0];
        const received = deleteItem(items, 0);
        expect(received).not.toBe(items); // because pure
        expect(received).toEqual([]);
    });
    it('deletes the first item', function () {
        const items = [0, 1, 2];
        const received = deleteItem(items, 0);
        expect(received).not.toBe(items); // because pure
        expect(received).toEqual([1, 2]);
    });
    it('deletes the middle item', function () {
        const items = [0, 1, 2];
        const received = deleteItem(items, 1);
        expect(received).not.toBe(items); // because pure
        expect(received).toEqual([0, 2]);
    });
    it('deletes the last item', function () {
        const items = [0, 1, 2];
        const received = deleteItem(items, 2);
        expect(received).not.toBe(items); // because pure
        expect(received).toEqual([0, 1]);
    });
});
