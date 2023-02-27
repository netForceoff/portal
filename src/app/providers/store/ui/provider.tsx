import { ReactNode, FC } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config/schema'
import createStore from '../config/store'

interface IProps {
  children: ReactNode
  initialState: StateSchema
}

const StoreProvider: FC<IProps> = ({ children, initialState }): JSX.Element => {
  const store = createStore(initialState)

  return (
        <Provider store={store}>
            {children}
        </Provider>
  )
}

export default StoreProvider
