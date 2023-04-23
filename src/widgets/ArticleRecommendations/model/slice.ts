import {
  PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { initialArticleRecommendationsState } from './state'

import { StateSchema } from 'app/providers/store'
import { IArticle } from 'entities/ArticleList'
import { getRecommendations } from './service'

const articleRecommendationsAdapter = createEntityAdapter<IArticle>({
  selectId: (comment) => comment.id
})

export const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendations',
  initialState: initialArticleRecommendationsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendations.pending, (state) => {
        state.status = 'request'
      })
      .addCase(getRecommendations.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.status = 'received'
        articleRecommendationsAdapter.addMany(state, action.payload)
      })
      .addCase(getRecommendations.rejected, (state, action: PayloadAction<{ text: string, title: string } | undefined>) => {
        state.status = 'error'
        state.error = action.payload
      })
  }
})

export const getArticleRecommendationsSelector = articleRecommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleRecommendations || articleRecommendationsAdapter.getInitialState()
)

export const { actions: articleRecommendationsActions, reducer: articleRecommendationsReducer } = articleRecommendationsSlice
