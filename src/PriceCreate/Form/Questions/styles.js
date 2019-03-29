export const

input = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	border: 'none',
	borderRadius: '25px',
	width: '100%',
	height: '22px',
	padding: '12px 0px',
	backgroundColor: 'rgba(48,62,77,0.025)',
	fontSize: '1.6rem',
	textIndent: '25px',
	color: 'rgba(48,62,77,0.8)',
	fontWeight: '700'
},

container = {
	columnCount: '2'
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