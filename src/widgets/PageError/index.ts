import { lazy } from 'react'

import { withSuspense } from '@/shared/lib'

const PageError = lazy(async () => await import('./ui/PageError'))

export default withSuspense(PageError)
