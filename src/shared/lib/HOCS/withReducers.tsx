import { Reducer } from '@reduxjs/toolkit'
import { ComponentType, useLayoutEffect } from 'react'
import { useStore, useDispatch } from 'react-redux'

import { ReduxStoreManager, AsyncStateSchema, StateSchema } from '@/app/providers/store';

type Reducers = {
  [key in keyof AsyncStateSchema]: Reducer<NonNullable<StateSchema[key]>>
}

function withReducers <P extends JSX.IntrinsicAttributes> (Component: ComponentType<P>, reducers: Reducers, shouldRemoveReducers: boolean = true) {
  return function HOCReducer (props: P) {
    const store = useStore() as ReduxStoreManager
    const dispatch = useDispatch()

    useLayoutEffect(() => {
      Object.entries<Reducer>(reducers).forEach(([key, reducer]) => {
        store.reducerManager.add(key as keyof AsyncStateSchema, reducer)
        dispatch({ type: `@@INIT ${key}` })
      })

      return () => {
        if (shouldRemoveReducers) {
          Object.entries<Reducer>(reducers).forEach(([key]) => {
            store.reducerManager.remove(key as keyof AsyncStateSchema)
            dispatch({ type: `@@REMOVE DISPATCH ${key}` })
          })
        }
      }
    }, [])

    return <Component {...props} />
  }
}

export default withReducers
