import "./App.css";
import Menubar from "./components/menubar.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import { Route, Routes } from "react-router-dom";

import FormPage from "./pages/formPage.jsx";

function App() {
    return (
        <div className="flex h-screen">
            {/* Navbar fixe */}
            <div className="fixed left-0 top-0 h-screen">
                <Menubar />
            </div>
            <div className="ml-16 flex-1 flex flex-col">
                <div className="flex-1 overflow-auto">
                    <Routes>
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/ecosmartform" element={<FormPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;