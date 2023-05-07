import ArticleListCompact from './ui/ArticleListCompact/ArticleListCompact'
import ArticleListExtended from './ui/ArticleListExtended/ArticleListExtended'
import { articleListActions, articleListReducer, getArticleList } from './model/slice'
import { getArticleListStatus, getArticleListError, getArticleListPage, getArticleListView, getArticleListSortBy, getArticleListOrder, getArticleListSearch } from './model/selectors'
import { getArticlesMore, initArticles } from './model/service'
import type { ArticleListSchema, IArticle, Order, SortBy } from './model/types'
import { filterArticles } from './model/service/filter'

export {
  ArticleListSchema,
  IArticle,
  SortBy,
  Order
}

export {
  getArticleList,
  getArticleListSortBy,
  getArticleListOrder,
  getArticleListSearch,
  getArticleListStatus,
  getArticleListError,
  getArticleListPage,
  getArticleListView
}

export {
  filterArticles,
  getArticlesMore,
  initArticles
}

export {
  articleListActions,
  articleListReducer
}

export {
  ArticleListCompact,
  ArticleListExtended
}
