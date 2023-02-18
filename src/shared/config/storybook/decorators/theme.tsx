// Подумать над архитектурой

import { THEME } from 'entities/theme'
import { Story } from '@storybook/react'

const ThemeDecorator = (theme: THEME) => {
  return function StoryComponent (Component: Story) {
    return (
        <div className={`app ${theme}`}>
            <Component />
        </div>
    )
  }
}

export default ThemeDecorator
