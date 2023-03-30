import About from 'pages/About'
import NotFound from 'pages/NotFound'
import { RouteProps } from 'react-router-dom'
import { RoutePath } from 'shared/config/router'
import Main from 'pages/Main'
import Profile from 'pages/Profile'
import ArticlesPage from 'pages/ArticlesPage'
import ArticlePage from 'pages/ArticlePage'

export type RouteConfigProps = RouteProps & {
  authOnly?: boolean
}

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
    path: RoutePath.profile
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
