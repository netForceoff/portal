// Подумать над архитектурой, плохо, что entities тянется в shared
import { THEME } from 'entities/theme'
import { Story } from '@storybook/react'

function ThemeDecorator (theme: THEME) {
  return function StoryComponent (Component: Story) {
    return (
        <div className={`app ${theme}`}>
            <Component />
        </div>
    )
  }
}

export default ThemeDecorator
