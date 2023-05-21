import React from 'react'
import { ComponentStory } from '@storybook/react'

import Skeleton from './Skeleton'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme'
// TODO - надо добавить в исключения файлы декораторов
// eslint-disable-next-line eslint-custom-rules/fsd-architecture
import { THEME } from '@/entities/theme'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Notmal = Template.bind({})

Notmal.args = {
  width: 150,
  height: 150
}

export const NotmalDark = Template.bind({})

NotmalDark.args = {
  width: 150,
  height: 150
}

NotmalDark.decorators = [ThemeDecorator(THEME.DARK)]

export const Circle = Template.bind({})

Circle.args = {
  width: 150,
  height: 150,
  radius: 50
}

export const CircleDark = Template.bind({})

CircleDark.args = {
  width: 150,
  height: 150,
  radius: 50
}

CircleDark.decorators = [ThemeDecorator(THEME.DARK)]
