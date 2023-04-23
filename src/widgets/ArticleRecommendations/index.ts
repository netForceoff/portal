import type { ArticleRecommendationsSchema } from './model/types'
import ArticleRecommendations from './ui/ArticleRecommendations'
import { articleRecommendationsReducer, getArticleRecommendationsSelector } from './model/slice'
import { getRecommendations } from './model/service'

export {
  ArticleRecommendationsSchema,
  ArticleRecommendations
}

export {
  getRecommendations
}

export {
  articleRecommendationsReducer,
  getArticleRecommendationsSelector
}
