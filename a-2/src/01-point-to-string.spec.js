// Here is an example of an arrow function with one argument and implicit return.
// Given number, return the corresponding string.
const numberToString = number => number.toString();

describe('point objects to strings', function () {

    // Given point object whose x and y properties have number values,
    // return as string the coordinates separated by comma.
    const objectToString = function (object) {
        return numberToString(object.x) + ',' + numberToString(object.y);
    };

    test('point object', function () {
        const object = { x: 1 / 4, y: 7 / 8 };
        const received = objectToString(object);
        const expected = '0.25,0.875';
        expect(received).toBe(expected);
    });
    test('array of point objects', function () {
        const objects = [
            { x: 1 / 2, y: 29 / 63 },
            { x: 1 / 2, y:  7 /  8 },
            { x: 1 / 4, y:  7 /  8 },
        ];
        const received = objects.map(objectToString);
        const expected = [
            '0.5,0.4603174603174603',
            '0.5,0.875',
            '0.25,0.875',
        ];
        expect(received).toEqual(expected);
    });
});

describe('point arrays to strings', function () {

    // Given point array whose items have number values,
    // return as string the coordinates separated by comma.
    const arrayToString = function (array) {
        return numberToString(array[0]) + ',' + numberToString(array[1]);
    };

    test('point array', function () {
        const array = [1 / 4, 7 / 8];
        const received = arrayToString(array);
        const expected = '0.25,0.875';
        expect(received).toBe(expected);
    });
    test('array of point arrays', function () {
        const arrays = [
            [ 1 / 2, 29 / 63 ],
            [ 1 / 2,  7 /  8 ],
            [ 1 / 4,  7 /  8 ],
        ];
        const received = arrays.map(arrayToString);
        const expected = [
            '0.5,0.4603174603174603',
            '0.5,0.875',
            '0.25,0.875',
        ];
        expect(received).toEqual(expected);
    });
});
