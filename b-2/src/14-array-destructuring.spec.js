describe('point arrays to strings', function () {
    // Given number of digits after the decimal point, return function
    // that given number, returns string with limited precision.
    const fixer = nDigits => number => {
        const toFixed = number.toFixed(nDigits)
        const toString = number.toString() // default conversion
        return toFixed.length < toString.length ? toFixed : toString
    }

    const numberToString = fixer(3)

    // Given point array whose items have number values,
    // return as string the coordinates separated by comma.
    const arrayToString = array => {
        // TODO
        // Declare variables `x` and `y` with array destructuring
        // Rewrite array index references array[0] and array[1] with x and y
        return numberToString(array[0]) + ',' + numberToString(array[1])
    }

    test('point array', function () {
        const array = [1 / 4, 7 / 8]
        const received = arrayToString(array)
        const expected = '0.25,0.875'
        expect(received).toBe(expected)
    })
    test('array of point arrays', function () {
        const arrays = [
            [ 1 / 2, 29 / 63 ],
            [ 1 / 2,  7 /  8 ],
            [ 1 / 4,  7 /  8 ],
        ]
        const received = arrays.map(arrayToString)
        const expected = [
            '0.5,0.460', // 0.4603174603174603
            '0.5,0.875',
            '0.25,0.875',
        ]
        expect(received).toEqual(expected)
    })
})
