import { useState } from 'react';
import {IUseThemeResult} from '../types/types';
import {THEME} from '../types/enums';
import { THEME_KEY } from 'shared/config/localStorage/keys';

const defaultTheme = localStorage.getItem(THEME_KEY) as THEME || THEME.LIGHT;

export const useTheme = (): IUseThemeResult => {
    const [theme, setTheme] = useState<THEME>(defaultTheme);

    const toggle = () => {
        const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
        setTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    }

    return {theme, toggle};
}