import { LoginSchema } from '@/features/auth/modalByUsername'
import { UserSchema } from '@/entities/User'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { ProfileSchema } from '@/features/EditableProfileCard'
import { AxiosInstance } from 'axios'
import createStore from './store'
import { ArticleCommentsSchema } from '@/widgets/ArticleComments'
import { SaveScrollPositionSchema } from '@/features/SaveScrollPosition'
import { ArticleListSchema } from '@/entities/ArticleList'
import { rtkApi } from '@/shared/api/query'
import { ArticleSchema } from '@/entities/Article'

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
