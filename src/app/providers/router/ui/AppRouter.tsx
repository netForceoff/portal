import { Route, Routes } from 'react-router-dom'
import { routeConfig, RouteConfigProps } from '../config'
import { useCallback } from 'react'
import RequireAuth from './RequireAuth'

// TODO подумать куда засунуть класс wrapper
const Router = (): JSX.Element => {
  const renerRoute = useCallback(({ authOnly, element, path }: RouteConfigProps): JSX.Element => {
    return <Route key={path} path={path} element={authOnly ? <RequireAuth>{element}</RequireAuth> : element} />
  }, [])

  return (
        <Routes>
            {routeConfig.map(renerRoute)}
        </Routes>
  )
}

export default Router
