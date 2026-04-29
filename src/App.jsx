import "./App.css";
import "./components/navbar.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import AboutPage from "./pages/aboutPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
}

export default App;
