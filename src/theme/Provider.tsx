import {FC } from "react"
import { Context, THEME, THEME_KEY } from "./Context"
import { useTheme } from "./useTheme"

const Provider: FC = ({children}) => {
    const {theme, toggle} = useTheme()

    return (
        <Context.Provider value={{
            theme,
            setTheme: toggle
        }}>
            {children}
        </Context.Provider>
    )
}

export default Provider;