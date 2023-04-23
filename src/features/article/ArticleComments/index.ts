import ArticleComments from './ui/ArticleComments'
import type { ArticleCommentsSchema } from './model/types'
import { getComments } from './model/service'
import { articleCommentsReducer } from './model/slice'

export {
  getComments,
  ArticleCommentsSchema,
  ArticleComments,
  articleCommentsReducer
}
