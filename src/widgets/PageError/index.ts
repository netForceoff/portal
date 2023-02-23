import { withSuspense } from 'shared/lib'
import { lazy } from 'react'

const PageError = lazy(async () => await import('./ui/PageError'))

export default withSuspense(PageError)
