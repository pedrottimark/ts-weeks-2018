describe('create object with prototype', () => {
    // A virtual constructor function encapsulates how to create object instances.
    // Return an object whose methods access local state via function closure.
    const createSet = () => {
        const object = {};

        return {
            add(key) {
                object[key] = true;
            },
            delete(key) {
                delete object[key];
            },
            has(key) {
                return Boolean(object[key]);
            },
        };
    };

    const set = createSet();
    set.add('member');

    it('does have member', () => {
        expect(set.has('member')).toBe(true);
    });
    it('does not have nonMember', () => {
        expect(set.has('nonMember')).toBe(false);
    });
    it('does have hasOwnProperty', function () {
        expect(set.has('hasOwnProperty')).toBe(true);
    });
});

describe('create object without prototype', () => {
    const createSet = () => {
        const object = Object.create(null);

        return {
            add(key) {
                object[key] = true;
            },
            delete(key) {
                delete object[key];
            },
            has(key) {
                return Boolean(object[key]);
            },
        };
    };

    const set = createSet();
    set.add('member');

    it('does have member', () => {
        expect(set.has('member')).toBe(true);
    });
    it('does not have nonMember', () => {
        expect(set.has('nonMember')).toBe(false);
    });
    it('does not have hasOwnProperty', function () {
        expect(set.has('hasOwnProperty')).toBe(false);
    });
});
