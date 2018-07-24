interface Config {
    singular: string,
    plural?: string,
    suffix?: string,
}

// TODO type Numerize
// TODO type Numerizer

// Given configuration object which has singular property as string
// and either plural or suffix property as string,
// return function which given value as number, returns noun phrase as string.
const numerizer: Numerizer = (config) => {
    if (typeof config.plural === 'string') {
        return value => `${value} ${value === 1 ? config.singular : config.plural}`
    }
    if (typeof config.suffix === 'string') {
        return value => `${value} ${config.singular}${value === 1 ? '' : config.suffix}`
    }
    return value => `${value} ${config.singular}`
}

export default numerizer
