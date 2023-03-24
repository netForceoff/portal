import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { ThemeProvider } from './app/providers/theme'
import 'shared/config/i18n'
import { ErrorBoundary } from 'shared/lib'
import PageError from 'widgets/PageError'
import { createStore } from 'app/providers/store'
import { Provider } from 'react-redux'
import { initialize } from 'app/providers/initialize'

const root = document.getElementById('root')

if (root) {
  const store = createStore()

  initialize()(store.dispatch, store.getState)
    .then(() => {
      render(
        <BrowserRouter>
            <Provider store={store}>
                <ErrorBoundary fallback={<PageError />}>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
                </Provider>
        </BrowserRouter>,
        root
      )
    })
}
