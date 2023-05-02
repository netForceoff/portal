import Article, { type IArticleProps } from './ui/Article/Article'
import type { IArticle, IArticleTextBlock, IArticleCodeBlock, IArticleImageBlock, ArticleSchema } from './model/types'
import { getArticleError, getArticleProps, getArticleStatus } from './model/selectors'
import { getArticle, useArticle } from './model/service'
import { articleActions, articleReducer } from './model/slice'

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
