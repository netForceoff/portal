import {useContext} from 'react';

import ThemeContext from '../model/context';
import {THEME, type IUseThemeResult} from '../types';

import {THEME_KEY} from '@/shared/const/localStorage';

const INVERTED_THEME = {
	[THEME.DARK]: THEME.LIGHT,
	[THEME.LIGHT]: THEME.GREEN,
	[THEME.GREEN]: THEME.DARK,
};

export const useTheme = (): IUseThemeResult => {
	const {theme, setTheme} = useContext(ThemeContext);

	const toggle = (): void => {
		const newTheme = INVERTED_THEME[theme];

		setTheme(newTheme);
		localStorage.setItem(THEME_KEY, newTheme);
	};

	return {theme, toggle};
};
