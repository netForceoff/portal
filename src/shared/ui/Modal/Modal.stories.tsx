import React from 'react'
import { ComponentStory } from '@storybook/react'

import Modal from './Modal'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme'
// TODO - надо добавить в исключения файлы декораторов
// eslint-disable-next-line eslint-custom-rules/fsd-architecture
import { THEME } from '@/entities/theme'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const ModalLight = Template.bind({})

ModalLight.args = {
  children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur omnis expedita repellendus mollitia a fuga ex dolor cumque voluptatem exercitationem molestias, sequi, ut tempora eius, aliquam nisi alias eum quas!'
}

export const ModalDark = Template.bind({})

ModalDark.args = {
  children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur omnis expedita repellendus mollitia a fuga ex dolor cumque voluptatem exercitationem molestias, sequi, ut tempora eius, aliquam nisi alias eum quas!'
}

ModalDark.decorators = [ThemeDecorator(THEME.DARK)]
