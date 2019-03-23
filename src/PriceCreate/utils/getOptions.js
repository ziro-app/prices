export const

getProducts = (data, index) => {
	const raw = data.map(value => value.slice(0,index)).slice(1).filter(value => Boolean(value[0]))
	const step = raw.map(value => [...value, Math.round((value[2] - value[1]) / 19)]).sort()
	const page = step.map((value, index) => [...value, index !== step.length - 1 ? 'middle' : 'last'])
	const minMax = [...page.map(value => [...value, 'min']), ...page.map(value => [...value, 'max'])].sort()
	return minMax.map(value => ({
		name: value[0],
		type: value[5],
		page: value[4],
		min: value[1],
		max: value[2],
		step: value[3]
	}))
},

getSuppliers = (data, index) =>
	data.map(value => value[index]).slice(1).filter(value => Boolean(value[0]))