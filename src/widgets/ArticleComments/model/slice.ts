import { StateSchema } from 'app/providers/store'
import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import { IComment } from 'entities/Comment'
import { ArticleCommentsSchema } from './types'
import { commentsApi } from './service'
import { articleAddingCommentApi } from 'features/ArticleAddingComment'

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
      .addMatcher(commentsApi.endpoints.getComments.matchPending, (state: ArticleCommentsSchema) => {
        state.status = 'request'
      })
      .addMatcher(commentsApi.endpoints.getComments.matchFulfilled, (state: ArticleCommentsSchema, action: PayloadAction<IComment[]>) => {
        state.status = 'received'
        console.log(action, 'action')
        commentsAdapter.setAll(state, action.payload)
      })
      .addMatcher(commentsApi.endpoints.getComments.matchRejected, (state, action: any) => {
        state.status = 'error'
        state.error = action.payload
      })
      .addMatcher(articleAddingCommentApi.endpoints.addComent.matchFulfilled, (state, action: PayloadAction<IComment>) => {
        commentsAdapter.addOne(state, action.payload)
      })
  }
})

export const getArticleCommentsSelector = commentsAdapter.getSelectors<StateSchema>((state) => state.articleComments || commentsAdapter.getInitialState())

export const { actions: articleCommentsActions, reducer: articleCommentsReducer } = articleCommentsSlice
