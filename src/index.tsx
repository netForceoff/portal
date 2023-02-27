import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { ThemeProvider } from './app/providers/theme'
import 'shared/config/i18n'
import { ErrorBoundary } from 'shared/lib'
import PageError from 'widgets/PageError'
import { initialState, StoreProvider } from 'app/providers/store'

render(
    <StoreProvider initialState={initialState}>
        <BrowserRouter>
            <ErrorBoundary fallback={<PageError />}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
)
