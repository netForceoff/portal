import { configureStore, AnyAction, Middleware, DeepPartial, Dispatch } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { StateSchema } from './types'
import { createReducerManager } from './manager'
import { axiosApi } from 'shared/api/axios'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'

const createStore = (initialState?: DeepPartial<StateSchema>): ToolkitStore<StateSchema, AnyAction, ReadonlyArray<Middleware<string, StateSchema, Dispatch<AnyAction>>>> => {
  const reducer = {
    user: userReducer
  }

  const reducerManager = createReducerManager(reducer)

  const store = configureStore<StateSchema, AnyAction, ReadonlyArray<Middleware<string, StateSchema>>>({
    devTools: __IS_DEV__,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    reducer: reducerManager.reduce,
    preloadedState: initialState as StateSchema,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          axiosApi
        }
      }
    })
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export default createStore
