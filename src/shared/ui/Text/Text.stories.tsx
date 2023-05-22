import { ComponentStory } from '@storybook/react'
import React from 'react'

import Text from './Text'

// TODO - надо добавить в исключения файлы декораторов
// eslint-disable-next-line eslint-custom-rules/fsd-architecture
import { THEME } from '@/entities/theme'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const TextLight = Template.bind({})

TextLight.args = {
  title: 'Title',
  text: 'Text'
}

export const OnlyTitle = Template.bind({})

OnlyTitle.args = {
  title: 'Title'
}

export const OnlyText = Template.bind({})

OnlyText.args = {
  text: 'Text'
}

export const TextDark = Template.bind({})

TextDark.args = {
  title: 'Title',
  text: 'Text'
}

TextDark.decorators = [ThemeDecorator(THEME.DARK)]

export const OnlyTitleDark = Template.bind({})

OnlyTitleDark.args = {
  title: 'Title'
}

OnlyTitleDark.decorators = [ThemeDecorator(THEME.DARK)]

export const OnlyTextDark = Template.bind({})

OnlyTextDark.args = {
  text: 'Text'
}

OnlyTextDark.decorators = [ThemeDecorator(THEME.DARK)]

export const TexLightError = Template.bind({})

TexLightError.args = {
  colorType: 'error',
  title: 'Title',
  text: 'Text'
}

export const TextDarkError = Template.bind({})

TextDarkError.args = {
  colorType: 'error',
  title: 'Title',
  text: 'Text'
}

TextDarkError.decorators = [ThemeDecorator(THEME.DARK)]
