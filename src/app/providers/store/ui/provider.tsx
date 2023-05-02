import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { ReactNode, FC } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config/types'
import createStore from '../config/store'

interface IProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const StoreProvider: FC<IProps> = ({ children, initialState, asyncReducers }): JSX.Element => {
  const store = createStore(initialState, asyncReducers)

  return (
        <Provider store={store}>
            {children}
        </Provider>
  )
}

export default StoreProvider
