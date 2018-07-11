const output = function (value, logger = console.info) {
    logger(typeof value, value);
};

console.log(typeof output);

output(1 + 2, console.log);

output('1' + '2', console.info);
output('1' + 2, undefined);
output(1 + '2');

output('1' + 2, null);
