import { Story } from '@storybook/react'
import '@/app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

const RouterDecorator = (Component: Story): JSX.Element => {
  return (
        <BrowserRouter>
            <Component />
        </BrowserRouter>
  )
}

export default RouterDecorator
