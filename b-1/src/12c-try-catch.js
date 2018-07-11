'use strict';

const string = 'string';

try {
    string[3] = 'o';
} catch (error) {
    console.error(error.message);
}

console.info(string);
