import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getArticle } from './service'
import { initialLoadingArticleState } from './state'
import { LoadingArticleSchema } from './types'

export const LoadingArticleSlice = createSlice({
  name: 'loadingArticle',
  initialState: initialLoadingArticleState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticle.pending, (state: LoadingArticleSchema) => {
        state.status = 'request'
      })
      .addCase(getArticle.fulfilled, (state: LoadingArticleSchema) => {
        state.status = 'received'
      })
      .addCase(getArticle.rejected, (state, action: PayloadAction<{ title: string, text: string } | undefined>) => {
        state.status = 'error'
        state.error = action.payload
      })
  }
})
export const { actions: loadingArticleActions, reducer: loadingArticleReducer } = LoadingArticleSlice
