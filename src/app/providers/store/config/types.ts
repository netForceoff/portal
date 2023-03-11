import { LoginSchema } from 'features/auth/modalByUsername'
import { UserSchema } from 'entities/User'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { Profile } from 'entities/Profile'

interface AsyncStateSchema {
  login?: LoginSchema
  profile?: Profile
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

export {
  Manager,
  AsyncStateSchema,
  StateSchema,
  ReduxStoreManager
}
