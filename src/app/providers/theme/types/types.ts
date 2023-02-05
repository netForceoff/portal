
import { THEME } from "./enums";

export interface IContext {
    theme?: THEME;
    setTheme?: () => void;
}


export interface IUseThemeResult {
    toggle: () => void,
    theme: THEME
}