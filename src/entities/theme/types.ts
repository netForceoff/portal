import { type Dispatch, type SetStateAction } from 'react'

export enum THEME {
  LIGHT = 'app_theme_light',
  DARK = 'app_theme_dark',
  GREEN = 'app_theme_green'
}

export interface IContext {
  theme: THEME
  setTheme: Dispatch<SetStateAction<THEME>>
}

export interface IUseThemeResult {
  toggle: () => void
  theme: THEME
}
