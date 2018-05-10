function output(value, logger) {
    logger(typeof value, value);
}

console.log(typeof output);

output(1 + 2, console.log);

output('1' + '2', console.info);
output('1' + 2, console.info);
output(1 + '2', console.info);
