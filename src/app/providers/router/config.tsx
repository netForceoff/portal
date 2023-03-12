import About from 'pages/About'
import NotFound from 'pages/NotFound'
import { RouteProps } from 'react-router-dom'
import { RoutePath } from 'shared/config/router'
import Main from 'pages/Main'
import { Profile } from 'pages/Profile'

export const routeConfig: RouteProps[] = [{
  element: <About />,
  path: RoutePath.about
},
{
  element: <NotFound />,
  path: RoutePath.notFound
},
{
  element: <Main />,
  path: RoutePath['/']
},
{
  element: <Profile />,
  path: RoutePath.profile
}
]
