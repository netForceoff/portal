import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import Provider from './theme/Provider'

render(
	<BrowserRouter>
		<Provider>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
)
