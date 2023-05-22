import About from '@/pages/About'
import ArticlePage from '@/pages/ArticlePage'
import ArticlesPage from '@/pages/ArticlesPage'
import Main from '@/pages/Main'
import NotFound from '@/pages/NotFound'
import Profile from '@/pages/ProfilePage'
import { RoutePath } from '@/shared/config/router'
import { RouteConfigProps } from '@/shared/types/router'

export const routeConfig: RouteConfigProps[] = [
  {
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
    authOnly: true,
    element: <Profile />,
    path: `${RoutePath.profile}:id`
  },
  {
    authOnly: true,
    element: <ArticlesPage />,
    path: RoutePath.articles
  },
  {
    authOnly: true,
    element: <ArticlePage />,
    path: `${RoutePath.article_details}:id`
  }
]
