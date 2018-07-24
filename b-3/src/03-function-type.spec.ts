describe('function type', () => {
    type FixValue = (value: number) => string

    // Given number of digits after the decimal point, return function
    // that given number value, returns string with limited precision.
    const fixer = nDigits => value => {
        const toFixed = value.toFixed(nDigits)
        const toString = value.toString() // default conversion
        return toFixed.length < toString.length ? toFixed : toString
    }

    describe('limit precision to 3 digits', () => {
        // Given number value, return string with limited precision
        // at most 3 digits after the decimal point.
        const fixValue3 = fixer(3)

        it('returns default if 1 digit', () => {
            expect(fixValue3(1 / 2)).toBe('0.5')
        })
        it('returns default if 2 digits', () => {
            expect(fixValue3(1 / 4)).toBe('0.25')
        })
        it('returns default if 3 digits', () => {
            expect(fixValue3(7 / 8)).toBe('0.875')
        })
        it('returns toFixed if 4 digits', () => {
            expect(fixValue3(13 / 16)).toBe('0.813') // 0.8125
        })
        it('returns toFixed if more digits', () => {
            expect(fixValue3(29 / 63)).toBe('0.460') // 0.4603174603174603
        })
        it('returns toFixed for PI', () => {
            expect(fixValue3(Math.PI)).toBe('3.142') // 3.141592653589793
        })
    })

    describe('limit precision to 4 digits', () => {
        // Given number value, return string with limited precision
        // at most 4 digits after the decimal point.
        const fixValue4 = fixer(4)

        it('returns default if 1 digit', () => {
            expect(fixValue4(1 / 2)).toBe('0.5')
        })
        it('returns default if 2 digits', () => {
            expect(fixValue4(1 / 4)).toBe('0.25')
        })
        it('returns default if 3 digits', () => {
            expect(fixValue4(7 / 8)).toBe('0.875')
        })
        it('returns default if 4 digits', () => {
            expect(fixValue4(13 / 16)).toBe('0.8125') // 0.8125
        })
        it('returns toFixed if more digits', () => {
            expect(fixValue4(29 / 63)).toBe('0.4603') // 0.4603174603174603
        })
        it('returns toFixed for PI', () => {
            expect(fixValue4(Math.PI)).toBe('3.1416') // 3.141592653589793
        })
    })
})
