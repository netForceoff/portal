import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { articleApi } from './service'
import { initialArticleState } from './state'
import { ArticleSchema, IArticle } from './types'

export const articleSlice = createSlice({
  name: 'article',
  initialState: initialArticleState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(articleApi.endpoints.getArticles.matchPending, (state: ArticleSchema) => {
        state.status = 'request'
      })
      .addMatcher(articleApi.endpoints.getArticles.matchFulfilled, (state: ArticleSchema, action: PayloadAction<IArticle>) => {
        state.status = 'received'
        state.article = action.payload
      })
      .addMatcher(articleApi.endpoints.getArticles.matchRejected, (state, action: any) => {
        state.status = 'error'
        state.error = action.payload
      })
  }
})
export const { actions: articleActions, reducer: articleReducer } = articleSlice
