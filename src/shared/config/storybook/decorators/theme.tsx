
import { Story } from '@storybook/react'

// TODO - надо добавить в исключения файлы декораторов
// eslint-disable-next-line eslint-custom-rules/fsd-architecture
import { THEME } from '@/entities/theme'

function ThemeDecorator (theme: THEME) {
  return function StoryComponent (Component: Story) {
    document.body.className = theme

    return (
      <Component />
    )
  }
}

export default ThemeDecorator
