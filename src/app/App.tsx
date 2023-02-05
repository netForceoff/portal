import { useContext } from "react";
import {Link} from "react-router-dom";
import './styles/index.scss';
import { ThemeContext } from "./providers/theme";
import AppRouter from "./providers/router";

export const App = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div className={`app ${theme}`}>
            <button onClick={setTheme}>Click</button>
            <Link to="/about">About</Link>
            <AppRouter />
        </div>

    )
}

export default App;
