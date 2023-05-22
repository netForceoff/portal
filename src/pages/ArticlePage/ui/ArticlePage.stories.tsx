import { ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'

import ArticlePage from './ArticlePage'

import { THEME } from '@/entities/theme'
import StoreDecorator from '@/shared/config/storybook/decorators/store'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme'

const article = {
  id: '1',
  title: 'test article title',
  subtitle: 'test article subtitle',
  img: '',
  views: 10,
  createdAt: '21.01.2011',
  type: 'IT',
  blocks: []
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/ArticlePage',
  component: ArticlePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [StoreDecorator({ user: { user: { id: '1', username: 'Name' } } }), withMock],
  parameters: {
    mockData: [
      {
        url: 'http://localhost:2000/articles/',
        method: 'GET',
        status: 200,
        response: article
      }
    ]
  }
}

const Template: ComponentStory<typeof ArticlePage> = (args) => <ArticlePage {...args} />

export const Light = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(THEME.DARK)]
