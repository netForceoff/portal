import { createContext } from "react";

export enum THEME {
    LIGHT = 'light',
    DARK = 'dark'
}

interface ThemeContext {
    theme?: THEME;
    setTheme?: () => void;
}




export const Context = createContext<ThemeContext>({});

export const THEME_KEY = 'theme';


