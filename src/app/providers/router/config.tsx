import About from 'pages/About'
import NotFound from 'pages/NotFound'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  ABOUT = 'about',
  NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: RouteProps[] = [{
  element: <About />,
  path: RoutePath.about
},
{
  element: <NotFound />,
  path: RoutePath.notFound
}]
