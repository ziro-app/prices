import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () =>
	<Router>
		<Switch>
			<Route
				exact path='/'
				render={() => <div>Hello</div>}
			/>
			<Route render={() => <div>NotFound</div>} />
		</Switch>
	</Router>

export default App