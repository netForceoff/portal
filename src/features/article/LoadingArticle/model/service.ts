import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n'
import { ThunkConfig } from 'app/providers/store'
import { IArticle } from 'entities/Article'

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
        title: i18n.t('errors.loading', { ns: 'article' }),
        text: i18n.t('errors.loading', { ns: 'article' })
      })
    }
  }
)
