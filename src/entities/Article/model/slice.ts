import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialArticleState } from './state'
import { IArticle } from './types'

export const ArticleSlice = createSlice({
  name: 'article',
  initialState: initialArticleState,
  reducers: {
    setArticle: (state, action: PayloadAction<IArticle>) => {
      state.data = action.payload
    }
  }
})

export const { actions: articleActions, reducer: articleReducer } = ArticleSlice
