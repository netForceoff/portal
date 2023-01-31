import {Link, Route, Routes} from "react-router-dom";
import About from "../About";

export const App = () => {
    return (
        <>
            <Link to="/about">About</Link>
        <Routes>
            <Route path="/about" element={<About />} />
        </Routes>
        </>

    )
}

export default App;
