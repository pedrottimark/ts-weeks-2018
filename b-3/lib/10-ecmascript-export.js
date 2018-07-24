// Given configuration object which has singular property as string
// and either plural or suffix property as string,
// return function which given value as number, returns noun phrase as string.
export default ({ singular, plural, suffix }) =>
    typeof plural === 'string'
        ? number => `${number} ${number === 1 ? singular : plural}`
        : number => `${number} ${singular}${number === 1 ? '' : suffix}`
