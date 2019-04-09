const updateClipboard = that => async url => {
	console.log(url)
	const result = await navigator.clipboard.writeText('Ziro Clipboard')
	console.log(result)
}

export default updateClipboard