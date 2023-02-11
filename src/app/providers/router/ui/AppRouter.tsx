import { Route, Routes } from "react-router-dom"
import { routeConfig } from "../config"

// TODO подумать куда засунуть класс wrapper
const Router = () => {
    return (
        <Routes>
            {routeConfig.map(({element, path}) => {
                return <Route key={path} path={path} element={<div className="wrapper">{element}</div>} />
            })}
            
        </Routes>
    )
}

export default Router;