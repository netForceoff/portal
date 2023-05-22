import { IRating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/query'
import i18n from '@/shared/config/i18n'

interface GetArticleRatingArgs {
  userId: string
  articleId: string
}

interface RateArticleArgs {
  userId: string
  articleId: string
  rate: number
  feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<IRating[], GetArticleRatingArgs>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId
        }
      }),
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => {
        return {
          title: i18n.t('errors.loading', { ns: 'article' }),
          text: i18n.t('errors.loading', { ns: 'article' })
        }
      }
    }),
    rateArticle: build.mutation<void, RateArticleArgs>({
      query: (args) => ({
        url: '/article-ratings',
        method: 'POST',
        body: args
      }),
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => {
        return {
          title: i18n.t('errors.loading', { ns: 'article' }),
          text: i18n.t('errors.loading', { ns: 'article' })
        }
      }
    })
  })
})

export const useRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
