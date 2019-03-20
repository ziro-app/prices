import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary/index'
import NotFound from '../NotFound/index'
import Header from '../Header/index'

const App = () =>
	<ErrorBoundary>
		<Router>
			<Switch>
				<Route
					exact path='/'
					render={() => <Header title='Fabricante'><div>Hello</div></Header>}
				/>
				<Route component={NotFound} />
			</Switch>
		</Router>
	</ErrorBoundary>

export default App