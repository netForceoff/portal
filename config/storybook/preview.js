import { addDecorator } from '@storybook/react'
import ThemeDecorator from '../../src/shared/config/storybook/decorators/theme'
import StyleDecorator from '../../src/shared/config/storybook/decorators/style'
import { THEME } from '../../src/entities/theme'
import RouterDecorator from '../../src/shared/config/storybook/decorators/router'
import i18n from './i18next.js'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  i18n,
  locale: 'ru',
  locales: {
    en: 'English',
    ru: 'Russian'
  }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(THEME.LIGHT))
addDecorator(RouterDecorator)
