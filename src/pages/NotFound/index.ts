import { withSuspense } from 'shared/lib'
import { lazy } from 'react'

const NotFound = lazy(async () => await import('./ui/NotFound'))

export default withSuspense(NotFound)
