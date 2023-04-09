import { StateSchema } from 'app/providers/store'
import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { ArticleListSchema } from './types'
import { IArticle } from 'entities/Article'
import { getArticles } from './service'

const articleListAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id
})

const articleListSlice = createSlice({
  name: 'articleListSlice',
  initialState: articleListAdapter.getInitialState<ArticleListSchema>({
    status: 'received',
    ids: [],
    entities: {},
    view: 'table'
  }),
  reducers: {
    setView: (state, action: PayloadAction<'table' | 'list'>) => {
      state.view = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state: ArticleListSchema) => {
        state.status = 'request'
      })
      .addCase(getArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.status = 'received'
        articleListAdapter.addMany(state, action.payload)
      })
      .addCase(getArticles.rejected, (state, action: PayloadAction<{ title: string, text: string } | undefined>) => {
        state.status = 'error'
        state.error = action.payload
      })
  }
})

export const getArticleList = articleListAdapter.getSelectors<StateSchema>((state) => state.articles || articleListAdapter.getInitialState())

export const { actions: articleListActions, reducer: articleListReducer } = articleListSlice
