import { getArticleError, getArticleProps, getArticleStatus } from './model/selectors'
import { getArticle, useArticle } from './model/service'
import { articleActions, articleReducer } from './model/slice'
import type { IArticle, IArticleTextBlock, IArticleCodeBlock, IArticleImageBlock, ArticleSchema } from './model/types'
import Article, { type IArticleProps } from './ui/Article/Article'

export {
  IArticleProps,
  IArticle,
  IArticleCodeBlock,
  IArticleTextBlock,
  IArticleImageBlock,
  ArticleSchema
}

export {
  Article
}

export {
  getArticleProps,
  getArticleStatus,
  getArticleError
}

export {
  getArticle,
  useArticle
}

export {
  articleActions,
  articleReducer
}
