import './styles/index.scss';
import AppRouter from "./providers/router";
import clsx from 'clsx';
import { Navbar } from "widgets/Navbar";
import { useTheme } from 'entities/theme';
import { Sidebar } from 'widgets/Sidebar/ui';

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={clsx(['app', theme])}>
            <Navbar />
            <div className="content">
                <Sidebar />
                <AppRouter />
            </div>
        </div>

    )
}

export default App;
