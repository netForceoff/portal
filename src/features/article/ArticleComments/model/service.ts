import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n'
import { ThunkConfig } from 'app/providers/store'
import { IComment } from 'entities/Comments'

export const getComments = createAsyncThunk<IComment[], string | undefined, ThunkConfig<{ title: string, text: string }>>(
  'article/getComments',
  async (uuid, { extra, dispatch, rejectWithValue }) => {
    try {
      if (uuid) {
        const response = await extra.axiosApi.get<IComment[]>('/comments1', {
          params: {
            articleId: uuid,
            _expand: 'user'
          }
        })

        if (!response.data) {
          throw new Error()
        }

        return response.data
      }

      throw new Error('Not found ')
    } catch (error) {
      console.error(error)

      return rejectWithValue({
        title: i18n.t('errors.loading', { ns: 'article' }),
        text: i18n.t('errors.loading', { ns: 'article' })
      })
    }
  }
)
