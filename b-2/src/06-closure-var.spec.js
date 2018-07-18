describe('create object with prototype', () => {
    // A virtual constructor function encapsulates how to create object instances.
    // Return an object whose methods access local state via function closure.

    // Return an object which represents a set of strings.
    const createSet = () => {
        const object = {}

        return {
            // Add key to the set of strings.
            add(key) {
                object[key] = true
            },
            // Delete key from the set of strings.
            delete(key) {
                delete object[key]
            },
            // Return whether key is in the set of strings.
            has(key) {
                return Boolean(object[key])
            },
        }
    }

    const set = createSet()
    set.add('member')

    it('does have member', () => {
        expect(set.has('member')).toBe(true)
    })
    it('does not have nonMember', () => {
        expect(set.has('nonMember')).toBe(false)
    })

    // One of these tests is not like the others :(
    it('does have hasOwnProperty', function () {
        expect(set.has('hasOwnProperty')).toBe(true)
    })
})

describe('create object without prototype', () => {
    // Return an object which represents a set of strings.
    const createSet = () => {
        const object = Object.create(null)

        return {
            // Add key to the set of strings.
            add(key) {
                object[key] = true
            },
            // Delete key from the set of strings.
            delete(key) {
                delete object[key]
            },
            // Return whether key is in the set of strings.
            has(key) {
                return Boolean(object[key])
            },
        }
    }

    const set = createSet()
    set.add('member')

    it('does have member', () => {
        expect(set.has('member')).toBe(true)
    })
    it('does not have nonMember', () => {
        expect(set.has('nonMember')).toBe(false)
    })

    // One of these tests is not like the others :)
    it('does not have hasOwnProperty', function () {
        expect(set.has('hasOwnProperty')).toBe(false)
    })
})
