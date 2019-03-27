const addSpaces = string =>
	string.split('-').map(value => [value[0].toUpperCase(), value.slice(1)].join('')).join(' ')

export default addSpaces