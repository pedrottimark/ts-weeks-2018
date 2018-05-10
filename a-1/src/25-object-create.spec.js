const hasMember = function (set, key) {
    return !!set[key];
};

describe('with prototype methods', function () {
    it('does have hasOwnProperty', function () {
        const object = {};
        object.member = true;
        expect(hasMember(object, 'member')).toBe(true);
        expect(hasMember(object, 'nonMember')).toBe(false);
        expect(hasMember(object, 'hasOwnProperty')).toBe(true);

        expect(object.member).toBe(true);
        expect(object.nonMember).toBe(undefined);
        expect(typeof object.hasOwnProperty).toBe('function');
    });
});

describe('without prototype methods', function () {
    it('does not have hasOwnProperty', function () {
        const object = Object.create(null);
        object.member = true;

        expect(hasMember(object, 'member')).toBe(true);
        expect(hasMember(object, 'nonMember')).toBe(false);
        expect(hasMember(object, 'hasOwnProperty')).toBe(false);

        expect(object.member).toBe(true);
        expect(object.nonMember).toBe(undefined);
        expect(typeof object.hasOwnProperty).toBe('undefined');
    });
});
