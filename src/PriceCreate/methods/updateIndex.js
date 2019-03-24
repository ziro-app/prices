const updateIndex = that => () => {
	that.setState({ pageIndex: that.state.pageIndex + 1 })
}

export default updateIndex