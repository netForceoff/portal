export enum AppRoutes {
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
  MAIN = '/'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.MAIN]: '/'
}
