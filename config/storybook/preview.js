import {addDecorator} from '@storybook/react';

// import { THEME } from '../../src/entities/theme'
import RouterDecorator from '../../src/shared/config/storybook/decorators/router';
import StyleDecorator from '../../src/shared/config/storybook/decorators/style';
// import ThemeDecorator from '../../src/shared/config/storybook/decorators/theme'

import i18n from './i18next.js';

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	i18n,
	locale: 'ru',
	locales: {
		en: 'English',
		ru: 'Russian',
	},
	themes: {
		default: 'light',
		list: [
			{name: 'light', class: 'app_theme_light', color: '#00aced'},
			{name: 'dark', class: 'app_theme_dark', color: '#3b5998'},
			{name: 'green', class: 'app_theme_green', color: 'green'},
		],
	},
};

addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(THEME.LIGHT))
addDecorator(RouterDecorator);
