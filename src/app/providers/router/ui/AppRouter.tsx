import { Route, Routes } from "react-router-dom"
import { routeConfig } from "../config"

const Router = () => {
    return (
        <Routes>
            {routeConfig.map(({element, path}) => {
                return <Route path={path} element={element} />
            })}
            
        </Routes>
    )
}

export default Router;