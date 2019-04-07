export const

container = {
	columnCount: '2'
},

subtitle = {
	fontSize: '1.4rem',
	color: 'rgba(48,62,77,0.8)',
	textAlign: 'center'
},

radioNotSelected = {
	display: 'block',
	cursor: 'pointer',
	padding: '10px 0',
	margin: '0 0 5px',
	borderRadius: '5px',
	textAlign: 'center',
	fontSize: '1.6rem',
	fontWeight: '700',
	color: 'rgba(48,62,77,0.3)',
	backgroundColor: 'rgba(48,62,77,0.025)'
},

radioSelected = Object.assign({}, radioNotSelected, {
	color: 'rgba(48,62,77,0.8)',
	boxShadow: `0px 0px 5px 0px rgba(48,62,77,0.1), 0px 0px 10px 0px rgba(48,62,77,0.09), 
	0px 0px 15px 0px rgba(48,62,77,0.08), 0px 0px 20px 0px rgba(48,62,77,0.07)`
})