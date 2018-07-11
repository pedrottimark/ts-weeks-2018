describe('object literal', function () {
    const item = {
        completed: false,
        id: 1,
        text: '',
    };

    test('object', function () {
        expect(typeof item).toBe('object');
    });
    test('boolean', function () {
        expect(typeof item.completed).toBe('boolean');
    });
    test('number', function () {
        expect(typeof item.id).toBe('number');
    });
    test('string', function () {
        expect(typeof item.text).toBe('string');
    });
    test('function', function () {
        expect(typeof console.info).toBe('function');
    });
});
