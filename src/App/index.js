import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary/index'
import NotFound from '../NotFound/index'

const App = () =>
	<ErrorBoundary>
		<Router>
			<Switch>
				<Route
					exact path='/'
					render={() => <div>Hello</div>}
				/>
				<Route component={NotFound} />
			</Switch>
		</Router>
	</ErrorBoundary>

export default App