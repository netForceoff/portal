import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { ThemeProvider } from './app/providers/theme'
import 'shared/config/i18n'
import { ErrorBoundary } from 'shared/lib'
import PageError from 'widgets/PageError'
import { StoreProvider } from 'app/providers/store'

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary fallback={<PageError />}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
