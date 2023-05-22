import { type FC, useState, ReactNode } from 'react'

import { Context, THEME } from '@/entities/theme'
import { THEME_KEY } from '@/shared/const/localStorage'

const defaultTheme = localStorage.getItem(THEME_KEY) as THEME || THEME.LIGHT

interface IProps {
  children: ReactNode
}

const Provider: FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme)

  return (
        <Context.Provider value={{
          theme,
          setTheme
        }}>
            {children}
        </Context.Provider>
  )
}

export default Provider
