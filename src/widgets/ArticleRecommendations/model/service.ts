import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n'
import { ThunkConfig } from 'app/providers/store'
import { IArticle } from 'entities/Article'

export const getRecommendations = createAsyncThunk<IArticle[], string | undefined, ThunkConfig<{ title: string, text: string }>>(
  'article/getRecommendations',
  async (uuid, { extra, dispatch, rejectWithValue }) => {
    try {
      if (uuid) {
        const response = await extra.axiosApi.get<IArticle[]>('/articles', {
          params: {
            _limit: 4
          }
        })

        if (!response.data) {
          throw new Error()
        }

        return response.data
      }

      throw new Error('No Uuid')
    } catch (error) {
      console.error(error)

      return rejectWithValue({
        title: i18n.t('errors.loading', { ns: 'article' }),
        text: i18n.t('errors.loading', { ns: 'article' })
      })
    }
  }
)
