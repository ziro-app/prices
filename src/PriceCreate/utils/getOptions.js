export const

getProducts = (data, index) =>
	data.map(value => value.slice(0,index)).slice(1).filter(value => Boolean(value[0])),

getSuppliers = (data, index) =>
	data.map(value => value[index]).slice(1).filter(value => Boolean(value[0]))