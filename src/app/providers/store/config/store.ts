import { configureStore, AnyAction, Middleware, DeepPartial } from '@reduxjs/toolkit'
import { loginReducer } from 'features/auth/modalByUsername'
import { userReducer } from 'entities/User'
import { StateSchema } from './schema'

const createStore = (initialState: DeepPartial<StateSchema>): ReturnType<typeof configureStore> => {
  return configureStore<StateSchema, AnyAction, ReadonlyArray<Middleware<string, StateSchema>>>({
    devTools: __IS_DEV__,
    reducer: {
      user: userReducer,
      login: loginReducer
    },
    preloadedState: initialState as StateSchema
  })
}

export default createStore
