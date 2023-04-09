import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n'
import { ThunkConfig } from 'app/providers/store'
import { IArticle } from 'entities/Article'

export const getArticles = createAsyncThunk<IArticle[], undefined, ThunkConfig<{ title: string, text: string }>>(
  'articles/getArticles',
  async (_, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.axiosApi.get<IArticle[]>('/articles')

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
