// Given indexes in sequences a and b and callback function to compare items,
// return number of common items that follow in forward direction.
// Like array slice method, interval does not include the end index.
const countCommonItemsF = function (aIndex, aEnd, bIndex, bEnd, isCommon) {
  let nCommon = 0;
  while (aIndex < aEnd && bIndex < bEnd && isCommon(aIndex, bIndex)) {
      aIndex += 1;
      bIndex += 1;
      nCommon += 1;
  }
  return nCommon;
};

describe('count common forward', function () {
    const a = [0, 1, 2, 3];
    const aLength = a.length;
    const b = [1, 2];
    const bLength = b.length;

    const isCommon = function (aIndex, bIndex) {
        if (aIndex < 0) {
            throw new RangeError('isCommon: aIndex ' + aIndex + ' < 0');
        }
        if (aIndex >= aLength) {
            throw new RangeError('isCommon: aIndex >= ' + aLength);
        }
        if (bIndex < 0) {
            throw new RangeError('isCommon: bIndex ' + bIndex + ' < 0');
        }
        if (bIndex >= bLength) {
            throw new RangeError('isCommon: bIndex >= ' + bLength);
        }
        return a[aIndex] === b[bIndex];
    };

    describe('', function () {
        test('at start of a', function () {
            expect(countCommonItemsF(0, aLength, 0, 0, isCommon)).toBe(0);
        });
        test('at end of a', function () {
            expect(countCommonItemsF(aLength, aLength, bLength, bLength, isCommon)).toBe(0);
        });
        it('past end of a', function () {
            expect(countCommonItemsF(aLength + 1, aLength, 0, 0, isCommon)).toBe(0);
        });
        it('past end of b', function () {
            expect(countCommonItemsF(0, aLength, bLength + 1, bLength, isCommon)).toBe(0);
        });
    });
    describe('0 or 1 in common', function () {
        it('does not match at indexes 0 and 0', function () {
            expect(countCommonItemsF(0, aLength, 0, 1, isCommon)).toBe(0);
        });
        it('does match at indexes 1 and 0', function () {
            expect(countCommonItemsF(1, aLength, 0, 1, isCommon)).toBe(1);
        });
        it('does match at indexes 2 and 1', function () {
            expect(countCommonItemsF(2, aLength, 1, bLength, isCommon)).toBe(1);
        });
    });
    describe('0 or 2 in common', function () {
        it('does not match at indexes 2 and 0', function () {
            expect(countCommonItemsF(2, aLength, 0, 1, isCommon)).toBe(0);
        });
        it('does match at indexes 1 and 0', function () {
            expect(countCommonItemsF(1, aLength, 0, bLength, isCommon)).toBe(2);
        });
    });
});
