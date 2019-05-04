export const

getProducts = (data, index) => {
	const raw = data.map(value => value.slice(0,index)).slice(1).filter(value => Boolean(value[0]))
	const options = raw.map(value => {
		const min = parseFloat(value[1].replace(',','.'))
		const max = parseFloat(value[2].replace(',','.'))
		const step = Math.round((max - min) / 18)
		let optionsArray = []
		for (let i = 0; i < 18; i ++)
			optionsArray.push(min + i * step)
		optionsArray.push(max)
		const toPortuguese = optionsArray.map(value => value.toString().replace('.',','))
		return [...value, toPortuguese]
	}).sort()
	const minMax = [...options.map(value => [...value, 'min']), ...options.map(value => [...value, 'max'])].sort()
	const minFirst = minMax.map((value, index) => {
		if (index % 2 === 0)
			return minMax[index + 1]
		return minMax[index - 1]
	})
	const next = minFirst.map((value, index) => {
		if (minFirst[index + 1])
			return [...value, `${minFirst[index + 1][0]}-${minFirst[index + 1][4]}`]
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
		options: value[3]
	}))
	const supplier = {
		name: 'Escolha um fabricante',
		type: '',
		prev: '',
		next: `${products[0].name}-${products[0].type}`,
		options: ''
	}
	return [supplier, ...products]
},

getSuppliers = (data, index) =>
	data.map(value => value[index]).slice(1).filter(value => Boolean(value[0])),

getIndex = (products, product) =>
	products.findIndex(({ next }) => next === product) + 1