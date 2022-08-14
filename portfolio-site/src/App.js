import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </Router>
        </div>
  );
}

export default App;
