import { ArticleRecommendationsSchema } from './types'

export const initialArticleRecommendationsState: ArticleRecommendationsSchema = {
  status: 'received',
  ids: [],
  entities: {}
}
