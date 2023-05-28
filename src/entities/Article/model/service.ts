import { createAsyncThunk } from '@reduxjs/toolkit'

import { IArticle } from './types'

import { ThunkConfig } from '@/app/providers/store'
import { rtkApi } from '@/shared/api/query'
import i18n from '@/shared/config/i18n'

export const getArticle = createAsyncThunk<IArticle, string | undefined, ThunkConfig<{ title: string, text: string }>>(
  'article/getArticle',
  async (uuid, { extra, dispatch, rejectWithValue }) => {
    try {
      if (uuid) {
        const response = await extra.axiosApi.get<IArticle>('/articles/' + uuid)

        if (!response.data) {
          throw new Error()
        }

        return response.data
      }

      throw new Error('No Uuid')
    } catch (error) {
      console.error(error)

      return rejectWithValue({
        title: await i18n.t('errors.loading', { ns: 'article' }),
        text: await i18n.t('errors.loading', { ns: 'article' })
      })
    }
  }
)

export const articleApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query({
      query: (id: string | undefined) => ({
        url: id ? `/articles/${id}` : '/articles/'
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

export const useArticle = articleApi.useGetArticlesQuery
