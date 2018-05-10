const item0 = {completed: true, id: 2, text: 'I done it.'};
const item1 = {completed: false, id: 4, text: 'Just do it!'};
const item2 = {completed: false, id: 6, text: 'To do, or not to do?'};
const items = [item0, item1, item2];

describe('find', function () {
    // Return first item which has id property; otherwise undefined.
    const find = function (items, id) {
        // TODO use array find method.
    };

    it('finds item', function () {
        expect(find(items, 2)).toBe(item1);
    });
    it('does not find item', function () {
        expect(find(items, -7)).toBe(undefined);
    });
});

describe('findIndex', function () {
    // Return index of first item which has id property; otherwise -1.
    const findIndex = function (items, id) {
        // TODO use array findIndex method.
    };

    it('finds item', function () {
        expect(findIndex(items, 2)).toBe(1);
    });
    it('does not find item', function () {
        expect(find(items, -7)).toBe(-1);
    });
});
