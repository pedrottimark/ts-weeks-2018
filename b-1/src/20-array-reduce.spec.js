describe('accumulate sum of items', function () {
    const addItems = function (items) {
        return items.reduce(function (sum, item) {
            // TODO
        }, 0);
    };

    it('returns 0 as sum of empty array', function () {
        // TODO
    });
    it('returns sum of non-empty array', function () {
        // TODO
    });
});

describe('get next id', function () {
    const idInitial = 1;
    // Given array of todo items,
    // return minimum integer that is greater than any id property.
    const idNext = function (items) {
        return items.reduce(function (id, item) {
            /*
            if () { // TODO if what
                // TODO return what
            }
            */
            return id; // because previous value of id is greater than id of item
        }, idInitial);
    };

    it('returns initial value for empty array', function () {
        // TODO
    });
    it('returns initial value even if item has lesser id', function () {
        const items = [{completed: false, id: -7, text: 'Do what?'}];

        expect(idNext(items)).toBe(idInitial);
    });
    it('returns minimum value for non-empty array', function () {
        const item0 = {completed: true, id: 2, text: 'I done it.'};
        const item1 = {completed: false, id: 4, text: 'Just do it!'};
        const item2 = {completed: false, id: 6, text: 'To do, or not to do?'};
        const items = [item0, item1, item2];

        expect(idNext(items)).toBe(7);
    });
});
