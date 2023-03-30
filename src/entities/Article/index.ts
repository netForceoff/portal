import Article, { type IArticleProps } from './ui/Article'
import type { IArticle, ArticleSchema, IArticleTextBlock, IArticleCodeBlock, IArticleImageBlock } from './model/types'
import { articleActions, articleReducer } from './model/slice'
import { getArticleProps } from './model/selectors'

export {
  articleActions,
  articleReducer,
  ArticleSchema,
  IArticleProps,
  Article,
  getArticleProps,
  IArticle,
  IArticleCodeBlock,
  IArticleTextBlock,
  IArticleImageBlock
}
