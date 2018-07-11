describe('copy array the hard way', function () {
    const copyArray = function (array) {
        for (let i = 0; i !== array.length; i += 1) {
            copied[i] = array[i];
        }
        return copied;
    };

    test('empty array', function () {
        const items = [];
        // TODO
    });
    test('non-empty array', function () {
        const items = [
            {completed: false, id: 1, text: 'Just do it!'},
            {completed: true, id: 2, text: 'I done it.'},
        ];
        // TODO
    });
});
