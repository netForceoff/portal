import { createContext, type SetStateAction } from 'react'
import { THEME, type IContext } from '../types'

const Context = createContext<IContext>({
  theme: THEME.LIGHT,
  setTheme: (theme: SetStateAction<THEME>) => theme
})

export default Context
