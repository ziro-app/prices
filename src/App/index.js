import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary/index'

const App = () =>
	<ErrorBoundary>
		<Router>
			<Switch>
				<Route
					exact path='/'
					render={() => <div>Hello</div>}
				/>
				<Route render={() => <div>NotFound</div>} />
			</Switch>
		</Router>
	</ErrorBoundary>

export default App