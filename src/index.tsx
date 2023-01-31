import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import {render} from "react-dom";
import './index.scss';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
