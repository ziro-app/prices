export const

optionIsValid = (options, input) => Boolean(options.filter( option => option === input).length),

objectIsValid = (object, target) => Boolean(object.filter(({ next }) => next === target).length)