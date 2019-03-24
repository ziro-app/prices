import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary/index'
import NotFound from '../NotFound/index'
import PriceCreate from '../PriceCreate/index'

const App = () =>
	<ErrorBoundary>
		<Router>
			<Switch>
				<Route exact path='/' component={PriceCreate} />
				<Route exact path='/:supplier/:product' component={PriceCreate} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</ErrorBoundary>

export default App