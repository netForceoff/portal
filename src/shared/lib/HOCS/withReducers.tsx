import { ReduxStoreManager, AsyncStateSchema } from 'app/providers/store'
import { ComponentType, useLayoutEffect } from 'react'
import { useStore, useDispatch } from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'

type Reducers = {
  [key in keyof AsyncStateSchema]: Reducer
}

function withReducers <P extends JSX.IntrinsicAttributes> (Component: ComponentType<P>, reducers: Reducers) {
  return function HOCReducer (props: P) {
    const store = useStore() as ReduxStoreManager
    const dispatch = useDispatch()

    useLayoutEffect(() => {
      Object.entries<Reducer>(reducers).forEach(([key, reducer]) => {
        store.reducerManager.add(key as keyof AsyncStateSchema, reducer)
      })

      dispatch({ type: '@@INIT' })

      return () => {
        Object.entries<Reducer>(reducers).forEach(([key]) => {
          store.reducerManager.remove(key as keyof AsyncStateSchema)
        })
        dispatch({ type: '@@REMOVE DISPATCH' })
      }
    }, [])

    return <Component {...props} />
  }
}

export default withReducers
