type FixValue = (value: number) => string;

// Given number of digits after the decimal point, return function
// that given number value, returns string with limited precision.
const fixer = nDigits => value => {
    const toFixed = value.toFixed(nDigits);
    const toString = value.toString(); // default conversion
    return toFixed.length < toString.length ? toFixed : toString;
};

const valueToString3 = fixer(3);

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
