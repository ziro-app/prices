export const

getProducts = (data, index) => {
	const raw = data.map(value => value.slice(0,index)).slice(1).filter(value => Boolean(value[0]))
	const step = raw.map(value => [...value, Math.round((value[2] - value[1]) / 19)]).sort()
	const minMax = [...step.map(value => [...value, 'min']), ...step.map(value => [...value, 'max'])].sort()
	const next = minMax.map((value, index) => {
		if (minMax[index + 1])
			return [...value, `${minMax[index + 1][0]}-${minMax[index + 1][4]}`]
		return [...value, '']
	})
	const prev = next.map((value, index) => {
		if (next[index - 1])
			return [...value, `${next[index - 1][0]}-${next[index - 1][4]}`]
		return [...value, '']
	})
	const products = prev.map(value => ({
		name: value[0],
		type: value[4],
		prev: value[6],
		next: value[5],
		min: value[1],
		max: value[2],
		step: value[3]
	}))
	const supplier = {
		name: 'fabricante',
		type: '',
		prev: '',
		next: `${products[0].name}-${products[0].type}`,
		min: '',
		max: '',
		step: ''
	}
	return [supplier, ...products]
},

getSuppliers = (data, index) =>
	data.map(value => value[index]).slice(1).filter(value => Boolean(value[0]))