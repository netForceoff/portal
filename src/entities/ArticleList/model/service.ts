import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n'
import { ThunkConfig } from 'app/providers/store'
import { IArticle } from 'entities/Article'
import { articleListActions } from './slice'
import { Order, SortBy } from './types'

interface ArticleParams {
  page?: number
  type: 'full' | 'more'
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const getArticlesMore = createAsyncThunk<void, void, ThunkConfig<{ title: string, text: string }>>(
  'articles/getArticlesMore',
  (_, { dispatch, getState }) => {
    const state = getState()
    const { hasMore, status, page } = state.articles || { limit: 1, hasMore: false }

    if (hasMore && status !== 'request') {
      dispatch(articleListActions.setPage(page + 1))
      dispatch(filterArticles({ page: page + 1, type: 'more' }))
    }
  }
)

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticles = createAsyncThunk<void, URLSearchParams, ThunkConfig<{ title: string, text: string }>>(
  'articles/initArticles',
  async (urlParams, { dispatch, getState }) => {
    const state = getState()
    const { ids } = state.articles || { ids: [] }

    const search = urlParams.get('search')
    const order = urlParams.get('order')
    const sort = urlParams.get('sort')

    if (search) {
      dispatch(articleListActions.setSearch(search))
    }

    if (order) {
      dispatch(articleListActions.setOrder(order as Order))
    }

    if (sort) {
      dispatch(articleListActions.setSort(sort as SortBy))
    }

    if (!ids.length) {
      dispatch(filterArticles({ page: 1, type: 'full' }))
    }
  }
)

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
