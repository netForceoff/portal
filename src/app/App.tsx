import './styles/index.scss'
import AppRouter from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { useTheme } from 'entities/theme'
import { Sidebar } from 'widgets/Sidebar'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

export const App = (): JSX.Element => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    document.body.className = theme
  }, [theme])

  useLayoutEffect(() => {
    dispatch(userActions.initUser())
  }, [dispatch])

  return (
        <>
            <Navbar />
            <div className="content">
                <Sidebar />
                <AppRouter />
            </div>
        </>

  )
}

export default App
