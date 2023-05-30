import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/store'
import { IComment } from '@/entities/Comment'
import { rtkApi } from '@/shared/api/query'
import i18n from '@/shared/config/i18n'

export const getComments = createAsyncThunk<IComment[], string | undefined, ThunkConfig<{ title: string, text: string }>>(
  'article/getComments',
  async (uuid, { extra, dispatch, rejectWithValue }) => {
    try {
      if (uuid) {
        const response = await extra.axiosApi.get<IComment[]>('/comments', {
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

export const addComment = createAsyncThunk<IComment, string, ThunkConfig<{ title: string, text: string }>>(
  'article/addComment',
  async (text, { extra, dispatch, rejectWithValue, getState }) => {
    try {
      const state = getState()
      const { article, user } = state

      if (article?.article && user?.user) {
        const response = await extra.axiosApi.post<IComment>('/comments', {
          articleId: article?.article?.id || '',
          userId: user?.user?.id || '',
          text
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

export const commentsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query<IComment[], { id?: string }>({
      query: ({ id }) => ({
        url: '/comments',
        params: {
          articleId: id,
          _expand: 'user'
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
    })
  })
})

export const useComments = commentsApi.useGetCommentsQuery
