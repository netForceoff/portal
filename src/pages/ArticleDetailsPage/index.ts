import { lazy } from 'react'
import { withSuspense } from 'shared/lib'

const ArticleDetailsPage = lazy(async () => await import('./ui/ArticleDetailsPage'))

export default withSuspense(ArticleDetailsPage)
