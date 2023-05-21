import { RouteProps } from 'react-router-dom'

export type RouteConfigProps = RouteProps & {
  authOnly?: boolean
}
