describe('array indexOf', function () {
    const indexOf = function (array, item) {
        for (var index = 0; index !== array.length; index += 1) {
            if (array[index] === item) {
                return index;
            }
        }
        return -1;
    };

    const array = ['zero', 'one', 'two', 'two', 'four'];

    it('finds item at the start', function () {
        const item = 'zero';
        const received = indexOf(array, item);
        const expected = array.indexOf(item);
        expect(received).toBe(expected);
    });
    it('finds item in the middle', function () {
        const item = 'one';
        const received = indexOf(array, item);
        const expected = array.indexOf(item);
        expect(received).toBe(expected);
    });
    it('finds repeated item', function () {
        const item = 'two';
        const received = indexOf(array, item);
        const expected = array.indexOf(item);
        expect(received).toBe(expected);
    });
    it('finds last item', function () {
        const item = 'four';
        const received = indexOf(array, item);
        const expected = array.indexOf(item);
        expect(received).toBe(expected);
    });
    it('does not find item', function () {
        const item = 'not';
        const received = indexOf(array, item);
        const expected = array.indexOf(item);
        expect(received).toBe(expected);
    });
});
