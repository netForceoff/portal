import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './app'

import '@/shared/config/i18n'
import { initialize } from '@/app/providers/initialize'
import { createStore } from '@/app/providers/store'
import { ThemeProvider } from '@/app/providers/theme'
import { ErrorBoundary } from '@/shared/lib'
import PageError from '@/widgets/PageError'

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
