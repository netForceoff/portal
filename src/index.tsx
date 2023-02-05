import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import {ThemeProvider} from './app/providers/theme'

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
