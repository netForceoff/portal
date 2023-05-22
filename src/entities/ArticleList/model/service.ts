import { createAsyncThunk } from '@reduxjs/toolkit'

import { filterArticles } from './service/filter'
import { articleListActions } from './slice'
import { Order, SortBy } from './types'

import { ThunkConfig } from '@/app/providers/store'

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
