import ArticleComments from './ui/ArticleComments'
import type { ArticleCommentsSchema } from './model/types'
import { getComments } from './model/service'

export {
  getComments,
  ArticleCommentsSchema,
  ArticleComments
}
