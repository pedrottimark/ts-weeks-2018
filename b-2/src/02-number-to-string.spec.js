describe('limit precision to 3 digits', function () {
    // Given number, return string with limited precision
    // at most 3 digits after the decimal point.
    const numberToString3 = function (number) {
        const toFixed = number.toFixed(3)
        const toString = number.toString() // default conversion
        return toFixed.length < toString.length ? toFixed : toString
    }

    it('returns default if 1 digit', function () {
        expect(numberToString3(1 / 2)).toBe('0.5')
    })
    it('returns default if 2 digits', function () {
        expect(numberToString3(1 / 4)).toBe('0.25')
    })
    it('returns default if 3 digits', function () {
        expect(numberToString3(7 / 8)).toBe('0.875')
    })
    it('returns toFixed if 4 digits', function () {
        expect(numberToString3(13 / 16)).toBe('0.813') // 0.8125
    })
    it('returns toFixed if more digits', function () {
        expect(numberToString3(29 / 63)).toBe('0.460') // 0.4603174603174603
    })
    it('returns toFixed for PI', function () {
        expect(numberToString3(Math.PI)).toBe('3.142') // 3.141592653589793
    })
})

describe('limit precision to 4 digits', function () {
    // Given number, return string with limited precision
    // at most 4 digits after the decimal point.
    const numberToString4 = function (number) {
        const toFixed = number.toFixed(4)
        const toString = number.toString() // default conversion
        return toFixed.length < toString.length ? toFixed : toString
    }

    it('returns default if 1 digit', function () {
        expect(numberToString4(1 / 2)).toBe('0.5')
    })
    it('returns default if 2 digits', function () {
        expect(numberToString4(1 / 4)).toBe('0.25')
    })
    it('returns default if 3 digits', function () {
        expect(numberToString4(7 / 8)).toBe('0.875')
    })
    it('returns default if 4 digits', function () {
        expect(numberToString4(13 / 16)).toBe('0.8125') // 0.8125
    })
    it('returns toFixed if more digits', function () {
        expect(numberToString4(29 / 63)).toBe('0.4603') // 0.4603174603174603
    })
    it('returns toFixed for PI', function () {
        expect(numberToString4(Math.PI)).toBe('3.1416') // 3.141592653589793
    })
})
