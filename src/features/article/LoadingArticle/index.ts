import LoadingArticle from './ui/LoadingArticle'
import type { ArticleSchema } from './model/types'
import { getArticle } from './model/service'
import { articleReducer } from './model/slice'

export {
  getArticle,
  LoadingArticle,
  ArticleSchema,
  articleReducer
}
