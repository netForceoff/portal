import { addDecorator } from '@storybook/react'
import ThemeDecorator from '../../src/shared/config/storybook/decorators/theme'
import StyleDecorator from '../../src/shared/config/storybook/decorators/style'
import { THEME } from '../../src/entities/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(THEME.DARK))
