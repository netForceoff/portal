import React from 'react'
import { ComponentStory } from '@storybook/react'

import Button, { ButtonBackgroundType, ButtonSize, ButtonColor, ButtonVariant } from './Button'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme'
import { THEME } from '@/entities/theme'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: ButtonColor.PRIMARY,
  children: 'Button'
}

export const PrimaryInverted = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryInverted.args = {
  color: ButtonColor.PRIMARY_INVERTED,
  children: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: ButtonColor.SECONDARY,
  children: 'Button'
}

export const SecondaryInverted = Template.bind({})
SecondaryInverted.args = {
  color: ButtonColor.SECONDARY_INVERTED,
  children: 'Button'
}

export const Clear = Template.bind({})

Clear.args = {
  variant: ButtonVariant.CLEAR,
  children: 'Button'
}

export const PrimaryDark = Template.bind({})

PrimaryDark.args = {
  color: ButtonColor.PRIMARY_INVERTED,
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
  color: ButtonColor.PRIMARY_INVERTED,
  variant: ButtonVariant.FILLED_INVERTED,
  backgroundType: ButtonBackgroundType.SQUARE,
  children: '>'
}

export const Round = Template.bind({})

Round.args = {
  color: ButtonColor.PRIMARY_INVERTED,
  variant: ButtonVariant.FILLED_INVERTED,
  backgroundType: ButtonBackgroundType.ROUND,
  children: '>'
}

export const SizeM = Template.bind({})

SizeM.args = {
  color: ButtonColor.PRIMARY_INVERTED,
  variant: ButtonVariant.FILLED_INVERTED,
  size: ButtonSize.M,
  children: '>'
}

export const SizeL = Template.bind({})

SizeL.args = {
  color: ButtonColor.PRIMARY_INVERTED,
  variant: ButtonVariant.FILLED_INVERTED,
  size: ButtonSize.L,
  children: '>'
}

export const SizeXL = Template.bind({})

SizeXL.args = {
  color: ButtonColor.PRIMARY_INVERTED,
  variant: ButtonVariant.FILLED_INVERTED,
  size: ButtonSize.XL,
  children: '>'
}
