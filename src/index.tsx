import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/providers/theme'
import '@/shared/config/i18n'
import { ErrorBoundary } from '@/shared/lib'
import PageError from '@/widgets/PageError'
import { createStore } from '@/app/providers/store'
import { Provider } from 'react-redux'
import { initialize } from '@/app/providers/initialize'

import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  if (root) {
    const store = createStore()

    initialize()(store.dispatch, store.getState)
      .then(() => {
        root.render(
          <BrowserRouter>
            <Provider store={store}>
                <ErrorBoundary fallback={<PageError />}>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
                </Provider>
        </BrowserRouter>
        )
      })
  }
}
