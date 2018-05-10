console.info('joined with comma (default)\n' + ['one', 'two', 'three'].join());
console.info('\njoined with empty string\n' + ['one', 'two', 'three'].join(''));
console.info('\njoined with newline\n' + ['one', 'two', 'three'].join('\n'));

const array = ['Alice', 'Bob', 'Eve', 'Dale, Jr.'];
console.info('\noriginal array:', array);
console.info('original array length:', array.length);

const joined = array.join(', ');
console.info('\njoined with comma and space:', joined);

console.info('\nBeware of split with comma and space :(');

const split = joined.split(', ');
console.info('\nsplit array:', split);
console.info('split array length:', split.length);
