import { type FC, useState } from 'react'
import { Context, THEME } from 'entities/theme'
import { THEME_KEY } from 'shared/config/localStorage/keys'

const defaultTheme = localStorage.getItem(THEME_KEY) as THEME || THEME.LIGHT

const Provider: FC = ({ children }) => {
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
