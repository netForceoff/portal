import { Story } from '@storybook/react'
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

const RouterDecorator = (story: () => Story): JSX.Element => {
  return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
  )
}

export default RouterDecorator
