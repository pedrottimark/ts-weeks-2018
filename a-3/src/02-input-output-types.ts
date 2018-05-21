// Given number value, return string with limited precision
// at most 3 digits after the decimal point.
const valueToString3 = function (value) {
    const toFixed = value.toFixed(3);
    const toString = value.toString(); // default conversion
    return toFixed.length < toString.length ? toFixed : toString;
};

// returns default if 1 digit
console.log(valueToString3(1 / 2) === '0.5');

// returns default if 2 digits
console.log(valueToString3(1 / 4) === '0.25');

// returns default if 3 digits
console.log(valueToString3(7 / 8) === '0.875');

// returns toFixed if 4 digits
console.log(valueToString3(13 / 16) === '0.813'); // 0.8125

// returns toFixed if more digits
console.log(valueToString3(29 / 63) === '0.460'); // 0.4603174603174603

// returns toFixed for PI
console.log(valueToString3(Math.PI) === '3.142'); // 3.141592653589793
