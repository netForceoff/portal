import React from 'react'
import { ComponentStory } from '@storybook/react'

import PageError from './PageError'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme'
import { THEME } from '@/entities/theme'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widget/PageError',
  component: PageError,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Light = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(THEME.DARK)]
