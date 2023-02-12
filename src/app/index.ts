import { lazy } from 'react'
import { withSuspense } from 'shared/lib'

const App = lazy(async () => await import('./App'))

export default withSuspense(App)
