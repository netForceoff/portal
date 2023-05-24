
import About from '@/pages/About'
import ArticlePage from '@/pages/ArticlePage'
import ArticlesPage from '@/pages/ArticlesPage'
import Main from '@/pages/Main'
import NotFound from '@/pages/NotFound'
import Profile from '@/pages/ProfilePage'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/config/router'
import { RouteConfigProps } from '@/shared/types/router'

export const routeConfig: RouteConfigProps[] = [
  {
    element: <About />,
    path: getRouteAbout()
  },
  {
    element: <NotFound />,
    path: '*'
  },
  {
    element: <Main />,
    path: getRouteMain()
  },
  {
    authOnly: true,
    element: <Profile />,
    path: getRouteProfile(':id')
  },
  {
    authOnly: true,
    element: <ArticlesPage />,
    path: getRouteArticles('')
  },
  {
    authOnly: true,
    element: <ArticlePage />,
    path: getRouteArticles(':id')
  }
]
