import { lazy } from 'react'
import { withSuspense } from 'shared/lib'

const ArticlesPage = lazy(async () => await import('./ui/ArticlesPage'))

export default withSuspense(ArticlesPage)
