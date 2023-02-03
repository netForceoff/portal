import { THEME, THEME_KEY } from "./Context";
import { useState } from 'react';

interface UseThemeResult {
    toggle: () => void,
    theme: THEME
}

const defaultTheme = localStorage.getItem(THEME_KEY) as THEME || THEME.LIGHT;

export const useTheme = (): UseThemeResult => {
    const [theme, setTheme] = useState<THEME>(defaultTheme);

    const toggle = () => {
        const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
        setTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    }

    return {theme, toggle};
}