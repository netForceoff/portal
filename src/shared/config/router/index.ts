export enum AppRoutes {
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
  MAIN = '/',
  PROFILE = 'profile'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROFILE]: 'profile'
}
