import { useContext } from 'react'
import { THEME_KEY } from 'shared/config/localStorage/keys'
import ThemeContext from '../model/context'
import { THEME, type IUseThemeResult } from '../types'

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggle = (): void => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK

    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }

  return { theme, toggle }
}
