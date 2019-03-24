const updateIndex = that => (navigation) => {
	const increment = navigation === 'next' ? 1 : -1
	that.setState({ pageIndex: that.state.pageIndex + increment })
}

export default updateIndex