import React from 'react'
import { ComponentStory } from '@storybook/react'

import Navbar from './Navbar'
import ThemeDecorator from 'shared/config/storybook/decorators/theme'
import { THEME } from 'entities/theme'
import StoreDecorator from 'shared/config/storybook/decorators/store'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widget/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {}

Light.decorators = [StoreDecorator({ user: { user: undefined } })]

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({ user: { user: undefined } })]

export const LogOut = Template.bind({})

LogOut.args = {}

LogOut.decorators = [StoreDecorator({ user: { user: { id: '1', username: 'Name' } } })]

export const LogOutDark = Template.bind({})

LogOutDark.args = {}

LogOutDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({ user: { user: { id: '1', username: 'Name' } } })]
