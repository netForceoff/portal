import { StateSchema } from 'app/providers/store'

export const getArticleRecommendationsStatus = (state: StateSchema) => state.articleRecommendations?.status || 'received'
