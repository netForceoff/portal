import { useContext } from "react";
import {Link} from "react-router-dom";
import './styles/index.scss';
import { ThemeContext } from "./providers/theme";
import AppRouter from "./providers/router";
import clsx from 'clsx';
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div className={clsx(['app', theme])}>
            <Navbar />
            <button onClick={setTheme}>Click</button>
            <AppRouter />
        </div>

    )
}

export default App;
