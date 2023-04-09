import { lazy } from 'react'
import { withSuspense } from 'shared/lib'
import type { ArticleListSchema } from './models/types'
import { IArticlesPageProps } from './ui/ArticlesPage'

const ArticlesPage = lazy(async () => await import('./ui/ArticlesPage'))

export default withSuspense<IArticlesPageProps>(ArticlesPage)

export { ArticleListSchema }
