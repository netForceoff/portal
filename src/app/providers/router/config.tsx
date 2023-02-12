import About from 'pages/About'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
  ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: RouteProps[] = [{
  element: <About />,
  path: RoutePath.about
}]
