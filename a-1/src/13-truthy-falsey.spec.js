const truthy = function (value) {
    if (value) {
        return true;
    }
    return false;
};

describe('falsey', function () {
    test('zero', function () {
        expect(truthy(0)).toBe(false);
    });
    test('negative zero', function () {
        expect(truthy(-0)).toBe(false);
    });
    test('NaN', function () {
        expect(truthy(NaN)).toBe(false);
    });
    test('empty string', function () {
        expect(truthy('')).toBe(false);
    });
    test('false', function () {
        expect(truthy(false)).toBe(false);
    });
    test('null', function () {
        expect(truthy(null)).toBe(false);
    });
    test('undefined', function () {
        expect(truthy()).toBe(false);
    });
});

describe('truthy', function () {
    test('one', function () {
        expect(truthy(1)).toBe(true);
    });
    test('Infinity', function () {
        expect(truthy(Infinity)).toBe(true);
    });
    test('-Infinity', function () {
        expect(truthy(-Infinity)).toBe(true);
    });
    test('non-empty string', function () {
        expect(truthy('non-empty string')).toBe(true);
    });
    test('true', function () {
        expect(truthy(true)).toBe(true);
    });
    test('function', function () {
        expect(truthy(function () {})).toBe(true);
    });
    test('empty object', function () {
        expect(truthy({})).toBe(true);
    });
    test('array', function () {
        expect(truthy([])).toBe(true);
    });
});
