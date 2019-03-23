export const

getProducts = (data, index) => {
	const raw = data.map(value => value.slice(0,index)).slice(1).filter(value => Boolean(value[0]))
	const step = raw.map(value => [ ...value, Math.round((value[2] - value[1]) / 19) ])
	const page = step.map((value, index) => [ ...value, index !== step.length - 1 ? 'middle' : 'last' ])
	console.log(page)
	return raw
},

getSuppliers = (data, index) =>
	data.map(value => value[index]).slice(1).filter(value => Boolean(value[0]))

/*
	name: 'bijuteria',
	type: 'min',
	page: 'middle',
	min: '19.90',
	max: '199.90',
	step: '30.90'
*/