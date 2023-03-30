import { LoginSchema } from 'features/auth/modalByUsername'
import { UserSchema } from 'entities/User'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { ProfileSchema } from 'features/EditableProfileCard'
import { AxiosInstance } from 'axios'
import createStore from './store'
import { ArticleSchema } from 'entities/Article'
import { LoadingArticleSchema } from 'features/LoadingArticle'

interface AsyncStateSchema {
  login?: LoginSchema
  profile?: ProfileSchema
  article?: ArticleSchema
  loadingArticle?: LoadingArticleSchema
}

interface StateSchema extends AsyncStateSchema {
  user: UserSchema
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

export {
  AppDispatch,
  Manager,
  AsyncStateSchema,
  StateSchema,
  ReduxStoreManager,
  ThunkConfig,
  ThunkExtraArg
}
