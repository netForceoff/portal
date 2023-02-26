// Подумать над архитектурой, плохо, что entities тянется в shared
import { THEME } from 'entities/theme'
import { Story } from '@storybook/react'

function ThemeDecorator (theme: THEME) {
  return function StoryComponent (Component: Story) {
    document.body.className = theme

    return (
        <div>
            <Component />
        </div>
    )
  }
}

export default ThemeDecorator
