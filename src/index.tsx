import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { ThemeProvider } from './app/providers/theme'
import 'shared/config/i18n'
import { ErrorBoundary } from 'shared/lib'
import PageError from 'widgets/PageError'

render(
    <BrowserRouter>
        <ErrorBoundary fallback={<PageError />}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)
