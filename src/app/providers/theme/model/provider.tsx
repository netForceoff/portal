import {FC} from "react"
import {useTheme} from "../lib/useTheme"
import Context from "./context"

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