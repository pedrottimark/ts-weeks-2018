describe('array type', () => {
    type FixValue = (value: number) => string
    type Fixer = (nDigits: number) => FixValue

    // Given number of digits after the decimal point, return function
    // that given number value, returns string with limited precision.
    const fixer: Fixer = nDigits => value => {
        const toFixed = value.toFixed(nDigits)
        const toString = value.toString() // default conversion
        return toFixed.length < toString.length ? toFixed : toString
    }

    interface Point {
        x: number,
        y: number,
    }

    const fixPoint = (fixValue: FixValue, { x, y }: Point) => `${fixValue(x)},${fixValue(y)}`

    const points = [
        { x: 1 / 2, y: 29 / 63 },
        { x: 1 / 2, y:  7 /  8 },
        { x: 1 / 4, y:  7 /  8 },
    ]

    test('limit precision to 3 digits', () => {
        const fixPoint3 = fixPoint.bind(null, fixer(3))
        expect(points.map(fixPoint3)).toMatchSnapshot()
    })
    test('limit precision to 4 digits', () => {
        const fixPoint4 = fixPoint.bind(null, fixer(4))
        expect(points.map(fixPoint4)).toMatchSnapshot()
    })
})
