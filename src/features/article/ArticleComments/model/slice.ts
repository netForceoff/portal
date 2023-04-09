import { StateSchema } from 'app/providers/store'
import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { IComment } from 'entities/Comment'
import { ArticleCommentsSchema } from './types'
import { addComment, getComments } from './service'

const commentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment) => comment.id
})

const articleCommentsSlice = createSlice({
  name: 'articleCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
    status: 'received',
    ids: [],
    entities: {}
  }),
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state: ArticleCommentsSchema) => {
        state.status = 'request'
      })
      .addCase(getComments.fulfilled, (state: ArticleCommentsSchema, action: PayloadAction<IComment[]>) => {
        state.status = 'received'
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(getComments.rejected, (state, action: PayloadAction<{ title: string, text: string } | undefined>) => {
        state.status = 'error'
        state.error = action.payload
      })
      .addCase(addComment.fulfilled, (state, action: PayloadAction<IComment>) => {
        commentsAdapter.addOne(state, action.payload)
      })
  }
})

export const getArticleCommentsSelector = commentsAdapter.getSelectors<StateSchema>((state) => state.articleComments || commentsAdapter.getInitialState())

export const { actions: articleCommentsActions, reducer: articleCommentsReducer } = articleCommentsSlice
