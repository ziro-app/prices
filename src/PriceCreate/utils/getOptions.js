export const

getProducts = (data, index) => {
	const raw = data.map(value => value.slice(0,index)).slice(1).filter(value => Boolean(value[0]))
	const step = raw.map(value => [...value, Math.round((value[2] - value[1]) / 19)]).sort()
	const next = step.map((value, index) => {
		if (step[index + 1])
			return [...value, step[index + 1][0]]
		return [...value, '']
	})
	const prev = next.map((value, index) => {
		if (step[index - 1])
			return [...value, step[index - 1][0]]
		return [...value, '']
	})
	const minMax = [...prev.map(value => [...value, 'min']), ...prev.map(value => [...value, 'max'])].sort()
	return minMax.map(value => ({
		name: value[0],
		type: value[6],
		prev: value[5],
		next: value[4],
		min: value[1],
		max: value[2],
		step: value[3]
	}))
},

getSuppliers = (data, index) =>
	data.map(value => value[index]).slice(1).filter(value => Boolean(value[0]))