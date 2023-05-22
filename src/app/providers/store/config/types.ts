import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'

import createStore from './store'

import { ArticleSchema } from '@/entities/Article'
import { ArticleListSchema } from '@/entities/ArticleList'
import { UserSchema } from '@/entities/User'
import { ProfileSchema } from '@/features/EditableProfileCard'
import { SaveScrollPositionSchema } from '@/features/SaveScrollPosition'
import { LoginSchema } from '@/features/auth/modalByUsername'
import { rtkApi } from '@/shared/api/query'
import { ArticleCommentsSchema } from '@/widgets/ArticleComments'

interface AsyncStateSchema {
  login?: LoginSchema
  profile?: ProfileSchema
  article?: ArticleSchema
  articleComments?: ArticleCommentsSchema
  articles?: ArticleListSchema
  scrollPosition?: SaveScrollPositionSchema
}

interface StateSchema extends AsyncStateSchema {
  user: UserSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

interface Manager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: keyof StateSchema, reducer: Reducer) => void
  remove: (key: keyof StateSchema) => void
}

interface ReduxStoreManager extends EnhancedStore<StateSchema> {
  reducerManager: Manager
}

interface ThunkExtraArg {
  axiosApi: AxiosInstance
}

interface ThunkConfig<R> {
  state: StateSchema
  rejectValue: R
  extra: ThunkExtraArg
}

type AppDispatch = ReturnType<typeof createStore>['dispatch']

export type {
  AppDispatch,
  Manager,
  AsyncStateSchema,
  StateSchema,
  ReduxStoreManager,
  ThunkConfig,
  ThunkExtraArg
}
