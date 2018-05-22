// Given configuration object which has singular property as string
// and either plural or suffix property as string,
// return function which given value as number, returns noun phrase as string.
module.exports = ({ singular, plural, suffix }) =>
    typeof plural === 'string'
        ? value => `TODO`
        : value => `TODO`
