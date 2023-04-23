import { LoginSchema } from 'features/auth/modalByUsername'
import { UserSchema } from 'entities/User'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { ProfileSchema } from 'features/EditableProfileCard'
import { AxiosInstance } from 'axios'
import createStore from './store'
import { ArticleSchema } from 'features/article/LoadingArticle'
import { ArticleCommentsSchema } from 'features/article/ArticleComments'
import { SaveScrollPositionSchema } from 'features/SaveScrollPosition'
import { ArticleListSchema } from 'entities/ArticleList'
import { ArticleRecommendationsSchema } from 'widgets/ArticleRecommendations'

interface AsyncStateSchema {
  login?: LoginSchema
  profile?: ProfileSchema
  article?: ArticleSchema
  articleComments?: ArticleCommentsSchema
  articleRecommendations?: ArticleRecommendationsSchema
  articles?: ArticleListSchema
  scrollPosition?: SaveScrollPositionSchema
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
