import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getArticle } from './service'
import { initialArticleState } from './state'
import { ArticleSchema } from './types'
import { IArticle } from 'entities/Article'

export const articleSlice = createSlice({
  name: 'article',
  initialState: initialArticleState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticle.pending, (state: ArticleSchema) => {
        state.status = 'request'
      })
      .addCase(getArticle.fulfilled, (state: ArticleSchema, action: PayloadAction<IArticle>) => {
        state.status = 'received'
        state.article = action.payload
      })
      .addCase(getArticle.rejected, (state, action: PayloadAction<{ title: string, text: string } | undefined>) => {
        state.status = 'error'
        state.error = action.payload
      })
  }
})
export const { actions: articleActions, reducer: articleReducer } = articleSlice
