import React from 'react'
import { ComponentStory } from '@storybook/react'

import Button, { ButtonBackgroundType, ButtonSize, ButtonVariant } from './Button'
import ThemeDecorator from 'shared/config/storybook/decorators/theme'
import { THEME } from 'entities/theme'

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

export const PrimaryDark = Template.bind({})

PrimaryDark.args = {
  variant: ButtonVariant.PRIMARY,
  children: 'Button'
}

PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]

export const Filled = Template.bind({})

Filled.args = {
  variant: ButtonVariant.FILLED,
  children: 'Button'
}

export const FilledInverted = Template.bind({})

FilledInverted.args = {
  variant: ButtonVariant.FILLED_INVERTED,
  children: 'Button'
}

export const Square = Template.bind({})

Square.args = {
  variant: ButtonVariant.FILLED_INVERTED,
  backgroundType: ButtonBackgroundType.SQUARE,
  children: '>'
}

export const Round = Template.bind({})

Round.args = {
  variant: ButtonVariant.FILLED_INVERTED,
  backgroundType: ButtonBackgroundType.ROUND,
  children: '>'
}

export const SizeM = Template.bind({})

SizeM.args = {
  variant: ButtonVariant.FILLED_INVERTED,
  size: ButtonSize.M,
  children: '>'
}

export const SizeL = Template.bind({})

SizeL.args = {
  variant: ButtonVariant.FILLED_INVERTED,
  size: ButtonSize.L,
  children: '>'
}

export const SizeXL = Template.bind({})

SizeXL.args = {
  variant: ButtonVariant.FILLED_INVERTED,
  size: ButtonSize.XL,
  children: '>'
}
