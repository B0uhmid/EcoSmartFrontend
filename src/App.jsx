import "./App.css";
import "./components/navbar.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import {Route, Routes} from "react-router-dom";
import Divider from "./components/divider.jsx";
import FormPage from "./pages/formPage.jsx";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/" element={<FormPage/>} />
        </Routes>
        <Divider />
        <Footer />
    </>
  );
}

export default App;
