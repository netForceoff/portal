import { createAsyncThunk } from '@reduxjs/toolkit'

import { IArticle } from '../types'

import { ThunkConfig } from '@/app/providers/store'
import i18n from '@/shared/config/i18n'

interface ArticleParams {
  page?: number
  type: 'full' | 'more'
}

export const filterArticles = createAsyncThunk<IArticle[], ArticleParams, ThunkConfig<{ title: string, text: string }>>(
  'articles/filterArticles',
  async (args, { extra, dispatch, getState, rejectWithValue }) => {
    try {
      const { page = 1 } = args
      const state = getState()
      const { limit, sort, order, search } = state.articles || { limit: 1, sort: 'title', order: 'asc', search: '' }

      const response = await extra.axiosApi.get<IArticle[]>('/articles', {
        params: {
          _sort: sort,
          _order: order,
          _limit: limit,
          _page: page,
          q: search
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      console.error(error)

      return rejectWithValue({
        title: i18n.t('errors.loading', { ns: 'article' }),
        text: i18n.t('errors.loading', { ns: 'article' })
      })
    }
  }
)
