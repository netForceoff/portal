import './styles/index.scss'
import AppRouter from './providers/router'
import { Navbar } from '@/widgets/Navbar'
import { useTheme } from '@/entities/theme'
import { Sidebar } from '@/widgets/Sidebar'
import { useLayoutEffect } from 'react'

export const App = (): JSX.Element => {
  const { theme } = useTheme()

  useLayoutEffect(() => {
    document.body.className = theme
  }, [theme])

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
