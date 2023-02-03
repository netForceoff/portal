import { useContext } from "react";
import {Link, Route, Routes} from "react-router-dom";
import About from "./components/About";
import './styles/index.scss';
import { Context } from "./theme/Context";

export const App = () => {
    const {theme, setTheme} = useContext(Context)

    return (
        <div className={`app ${theme}`}>
            <button onClick={setTheme}>Click</button>
            <Link to="/about">About</Link>
        <Routes>
            <Route path="/about" element={<About />} />
        </Routes>
        </div>

    )
}

export default App;
