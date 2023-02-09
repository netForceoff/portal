import './styles/index.scss';
import AppRouter from "./providers/router";
import clsx from 'clsx';
import { Navbar } from "widgets/Navbar";
import { useTheme } from 'entities/theme';

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={clsx(['app', theme])}>
            <Navbar />
            <AppRouter />
        </div>

    )
}

export default App;
