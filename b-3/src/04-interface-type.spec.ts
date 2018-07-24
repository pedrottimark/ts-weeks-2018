describe('interface type', () => {
    type FixValue = (value: number) => string
    type Fixer = (nDigits: number) => FixValue

    // Given number of digits after the decimal point, return function
    // that given number value, returns string with limited precision.
    const fixer: Fixer = nDigits => value => {
        const toFixed = value.toFixed(nDigits)
        const toString = value.toString() // default conversion
        return toFixed.length < toString.length ? toFixed : toString
    }

    const fixPoint = (fixValue, point) => `${fixValue(point.x)},${fixValue(point.y)}`

    describe('limit precision to 3 digits', () => {
        // Given number value, return string with limited precision
        // at most 3 digits after the decimal point.
        const fixValue3: FixValue = fixer(3)

        test('1 or 3 digits', () => {
            const point = { x: 1 / 2, y: 7 / 8 }
            expect(fixPoint(fixValue3, point)).toMatchSnapshot()
        })
        test('2 or 3 digits', () => {
            const point = { x: 1 / 4, y: 7 / 8 }
            expect(fixPoint(fixValue3, point)).toMatchSnapshot()
        })
        test('1 or truncated to 3 digits', () => {
            const point = { x: 1 / 2, y: 29 / 63 }
            expect(fixPoint(fixValue3, point)).toMatchSnapshot()
        })
    })
    describe('limit precision to 4 digits', () => {
        // Given number value, return string with limited precision
        // at most 4 digits after the decimal point.
        const fixValue4: FixValue = fixer(4)

        test('1 or 3 digits', () => {
            const point = { x: 1 / 2, y: 7 / 8 }
            expect(fixPoint(fixValue4, point)).toMatchSnapshot()
        })
        test('2 or 3 digits', () => {
            const point = { x: 1 / 4, y: 7 / 8 }
            expect(fixPoint(fixValue4, point)).toMatchSnapshot()
        })
        test('1 or truncated to 4 digits', () => {
            const point = { x: 1 / 2, y: 29 / 63 }
            expect(fixPoint(fixValue4, point)).toMatchSnapshot()
        })
    })
})
