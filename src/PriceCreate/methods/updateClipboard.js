const updateClipboard = that => async url => {
	if (url !== '#') {
		const share = `https://precos.ziro.online${url}`
		const result = await navigator.clipboard.writeText(share)
		if (result)
			alert('Erro ao copiar link', result)
		else
			alert(`Copiado com sucesso: ${share}`)
	}
	else
		alert('Fabricante inválido. Link não copiado')
}

export default updateClipboard