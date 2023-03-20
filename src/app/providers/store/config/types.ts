import { LoginSchema } from 'features/auth/modalByUsername'
import { UserSchema } from 'entities/User'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { ProfileSchema } from 'features/EditableProfileCard'
import { AxiosInstance } from 'axios'

interface AsyncStateSchema {
  login?: LoginSchema
  profile?: ProfileSchema
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

export interface ThunkExtraArg {
  axiosApi: AxiosInstance
}

export interface ThunkConfig<R> {
  state: StateSchema
  rejectValue: R
  extra: ThunkExtraArg
}

export {
  Manager,
  AsyncStateSchema,
  StateSchema,
  ReduxStoreManager
}
