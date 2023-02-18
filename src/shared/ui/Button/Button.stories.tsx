import React from 'react'
import { ComponentStory } from '@storybook/react'

import Button, { ButtonVariant } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: ButtonVariant.PRIMARY,
  children: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: ButtonVariant.SECONDARY,
  children: 'Button'
}

export const Clear = Template.bind({})

Clear.args = {
  variant: ButtonVariant.CLEAR,
  children: 'Button'
}
