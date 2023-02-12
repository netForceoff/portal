import { routeConfig } from '../config'
import About from 'pages/About'

describe('app/providers/router/config', () => {
  test('test', () => {
    expect(routeConfig).toStrictEqual([{
      element: <About />,
      path: '/about'
    }])
  })
})
