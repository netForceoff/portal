import { lazy } from 'react'

import { withSuspense } from '@/shared/lib'

const ArticlePage = lazy(async () => await import('./ui/ArticlePage'))

export default withSuspense(ArticlePage)
