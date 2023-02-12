import { type Dispatch, type SetStateAction } from 'react'

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface IContext {
  theme: THEME
  setTheme: Dispatch<SetStateAction<THEME>>
}

export interface IUseThemeResult {
  toggle: () => void
  theme: THEME
}
