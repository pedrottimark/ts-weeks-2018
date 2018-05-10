console.log(typeof 0, 0);
console.log(typeof -0, -0);
console.log(typeof Infinity, Infinity);
console.log(typeof -Infinity, -Infinity);
console.log(typeof NaN, NaN);

console.log(typeof '', '');
console.log(typeof 'non-empty', 'non-empty');

console.log(typeof false, false);
console.log(typeof true, true);

console.log(typeof undefined, undefined);

const symbol = Symbol('description');
console.log(typeof symbol, symbol);

const f = function () {};
console.log(typeof f, f);

const object = {};
console.log(typeof object, object);

const array = [];
console.log(typeof array, array);

console.log(typeof null, null);
