import React from 'react'
import { ComponentStory } from '@storybook/react'

import Sidebar from './Sidebar'
import ThemeDecorator from 'shared/config/storybook/decorators/theme'
import StoreDecorator from 'shared/config/storybook/decorators/store'
import { THEME } from 'entities/theme'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [StoreDecorator]
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(THEME.DARK)]
